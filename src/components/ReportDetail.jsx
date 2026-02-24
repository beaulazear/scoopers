import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { authApiCall, isAuthenticated } from '../utils/api';

const ReportDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [report, setReport] = useState(null);
  const [history, setHistory] = useState([]);
  const [resolving, setResolving] = useState(false);
  const [selectedAction, setSelectedAction] = useState('');
  const [resolutionNotes, setResolutionNotes] = useState('');

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate('/poopstreats');
      return;
    }

    fetchReportDetail();
  }, [id, navigate]);

  const fetchReportDetail = async () => {
    setLoading(true);
    try {
      const data = await authApiCall(`/admin/moderation/reports/${id}`);

      setReport(data.report);
      setHistory(data.moderation_history || []);
    } catch (error) {
      console.error('Error fetching report:', error);
      alert('Failed to load report details');
    } finally {
      setLoading(false);
    }
  };

  const handleMarkReviewing = async () => {
    try {
      await authApiCall(`/admin/moderation/reports/${id}/review`, { method: 'PATCH' });
      alert('Report marked as reviewing');
      fetchReportDetail();
    } catch (error) {
      alert('Failed to mark as reviewing');
    }
  };

  const handleResolve = async () => {
    if (!selectedAction) {
      alert('Please select a resolution action');
      return;
    }

    const confirmMessage = selectedAction === 'user_banned'
      ? 'Are you sure you want to PERMANENTLY BAN this user? This cannot be undone without admin intervention.'
      : selectedAction === 'user_suspended'
      ? 'Are you sure you want to SUSPEND this user for 7 days?'
      : `Are you sure you want to resolve this report with action: ${selectedAction}?`;

    if (!window.confirm(confirmMessage)) {
      return;
    }

    setResolving(true);
    try {
      await authApiCall(`/admin/moderation/reports/${id}/resolve`, {
        method: 'PATCH',
        body: JSON.stringify({
          resolution_action: selectedAction,
          resolution_notes: resolutionNotes || 'Admin review'
        })
      });

      alert('Report resolved successfully');
      navigate('/admin/reports');
    } catch (error) {
      console.error('Error resolving report:', error);
      alert('Failed to resolve report');
    } finally {
      setResolving(false);
    }
  };

  const handleDismiss = async () => {
    if (!window.confirm('Are you sure you want to dismiss this report? This means no violation was found.')) {
      return;
    }

    try {
      const reason = resolutionNotes || 'No violation found';
      await authApiCall(`/admin/moderation/reports/${id}/dismiss`, {
        method: 'PATCH',
        body: JSON.stringify({ reason })
      });

      alert('Report dismissed');
      navigate('/admin/reports');
    } catch (error) {
      alert('Failed to dismiss report');
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusBadge = (status) => {
    const colors = {
      pending: '#F59E0B',
      reviewing: '#3B82F6',
      resolved: '#10B981',
      dismissed: '#6B7280'
    };

    return (
      <span style={{
        padding: '6px 12px',
        borderRadius: '6px',
        fontSize: '14px',
        fontWeight: '700',
        backgroundColor: colors[status] || '#6B7280',
        color: 'white'
      }}>
        {status.toUpperCase()}
      </span>
    );
  };

  const getReasonLabel = (reason) => {
    const labels = {
      inappropriate_photo: 'Inappropriate Photo',
      fake_report: 'Fake Report',
      harassment: 'Harassment',
      spam: 'Spam',
      other: 'Other'
    };
    return labels[reason] || reason;
  };

  if (loading) {
    return (
      <div style={{
        minHeight: '100vh',
        background: 'var(--dark)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--off-white)',
        fontWeight: '700'
      }}>
        Loading report details...
      </div>
    );
  }

  if (!report) {
    return (
      <div style={{
        minHeight: '100vh',
        background: 'var(--dark)',
        padding: '32px',
        color: 'var(--off-white)'
      }}>
        <h1>Report not found</h1>
        <button
          onClick={() => navigate('/admin/reports')}
          style={{
            background: 'var(--green)',
            color: 'var(--dark)',
            border: 'none',
            padding: '12px 24px',
            borderRadius: '8px',
            fontWeight: '900',
            cursor: 'pointer',
            marginTop: '16px'
          }}
        >
          Back to Reports
        </button>
      </div>
    );
  }

  const isActionable = report.status === 'pending' || report.status === 'reviewing';

  return (
    <div style={{
      minHeight: '100vh',
      background: 'var(--dark)',
      padding: '32px 16px'
    }}>
      {/* Header */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto 32px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '16px'
      }}>
        <h1 style={{
          color: 'var(--green)',
          fontSize: '32px',
          fontWeight: '900',
          margin: 0
        }}>
          Report #{report.id}
        </h1>
        <button
          onClick={() => navigate('/admin/reports')}
          style={{
            background: 'var(--green)',
            color: 'var(--dark)',
            border: 'none',
            padding: '12px 24px',
            borderRadius: '8px',
            fontWeight: '900',
            cursor: 'pointer'
          }}
        >
          ← Back to All Reports
        </button>
      </div>

      {/* Report Card */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto 24px',
        background: 'var(--off-white)',
        borderRadius: '12px',
        border: '3px solid var(--green)',
        padding: '24px'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px',
          marginBottom: '24px'
        }}>
          <InfoField label="Status" value={getStatusBadge(report.status)} />
          <InfoField label="Reason" value={getReasonLabel(report.reason)} />
          <InfoField label="Reported Content" value={report.reported_content} />
          <InfoField label="Content Type" value={report.reportable_type} />
          <InfoField label="Created" value={formatDate(report.created_at)} />
          <InfoField
            label="Reviewed"
            value={report.reviewed_at ? formatDate(report.reviewed_at) : 'Not yet reviewed'}
          />
        </div>

        {report.description && (
          <div style={{ marginBottom: '20px' }}>
            <strong style={{ display: 'block', marginBottom: '8px', fontWeight: '900' }}>
              Description:
            </strong>
            <p style={{ margin: 0, padding: '12px', background: '#F3F4F6', borderRadius: '6px', fontWeight: '600' }}>
              {report.description}
            </p>
          </div>
        )}

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px'
        }}>
          <div>
            <strong style={{ display: 'block', marginBottom: '8px', fontWeight: '900' }}>Reporter:</strong>
            <div style={{ fontWeight: '600' }}>
              {report.reporter?.name || 'N/A'}
              <br />
              <span style={{ fontSize: '14px', color: '#6B7280' }}>
                @{report.reporter?.username || 'N/A'}
              </span>
            </div>
          </div>

          {report.reported_user && (
            <div>
              <strong style={{ display: 'block', marginBottom: '8px', fontWeight: '900' }}>Reported User:</strong>
              <div style={{ fontWeight: '600' }}>
                {report.reported_user.name}
                <br />
                <span style={{ fontSize: '14px', color: '#6B7280' }}>
                  @{report.reported_user.username}
                </span>
                <br />
                <span style={{ fontSize: '13px', color: report.reported_user.warnings_count >= 2 ? '#EF4444' : '#6B7280' }}>
                  Warnings: {report.reported_user.warnings_count}/3
                </span>
                <br />
                <span style={{ fontSize: '13px', color: '#6B7280' }}>
                  Total Reports: {report.reported_user.reports_count}
                </span>
                <br />
                <span style={{ fontSize: '13px', fontWeight: '700', color: report.reported_user.status === 'active' ? 'var(--green)' : '#EF4444' }}>
                  Status: {report.reported_user.status.toUpperCase()}
                </span>
              </div>
            </div>
          )}
        </div>

        {report.overdue && (
          <div style={{
            marginTop: '20px',
            background: '#FEE2E2',
            border: '2px solid #EF4444',
            borderRadius: '8px',
            padding: '12px',
            color: '#991B1B',
            fontWeight: '700'
          }}>
            ⚠️ This report is OVERDUE (>24 hours). App Store policy requires immediate review.
          </div>
        )}
      </div>

      {/* Action Panel */}
      {isActionable && (
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto 24px',
          background: 'var(--off-white)',
          borderRadius: '12px',
          border: '3px solid var(--orange)',
          padding: '24px'
        }}>
          <h2 style={{
            fontSize: '20px',
            fontWeight: '900',
            marginBottom: '20px'
          }}>
            Take Action
          </h2>

          {report.status === 'pending' && (
            <button
              onClick={handleMarkReviewing}
              style={{
                background: '#3B82F6',
                color: 'white',
                border: 'none',
                padding: '12px 24px',
                borderRadius: '8px',
                fontWeight: '700',
                cursor: 'pointer',
                marginBottom: '20px'
              }}
            >
              Mark as Reviewing
            </button>
          )}

          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', fontWeight: '900', marginBottom: '8px' }}>
              Resolution Action:
            </label>
            <select
              value={selectedAction}
              onChange={(e) => setSelectedAction(e.target.value)}
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '6px',
                border: '2px solid var(--dark)',
                fontWeight: '700',
                fontSize: '14px'
              }}
            >
              <option value="">-- Select Action --</option>
              <option value="content_deleted">Delete Content</option>
              <option value="user_warned">Warn User (1st/2nd/3rd warning)</option>
              <option value="user_suspended">Suspend User (7 days)</option>
              <option value="user_banned">Ban User (PERMANENT)</option>
              <option value="no_action">No Action</option>
            </select>
          </div>

          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', fontWeight: '900', marginBottom: '8px' }}>
              Notes:
            </label>
            <textarea
              value={resolutionNotes}
              onChange={(e) => setResolutionNotes(e.target.value)}
              placeholder="Add notes about your decision..."
              rows="4"
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '6px',
                border: '2px solid var(--dark)',
                fontWeight: '600',
                fontSize: '14px',
                fontFamily: 'inherit',
                resize: 'vertical'
              }}
            />
          </div>

          <div style={{ display: 'flex', gap: '12px' }}>
            <button
              onClick={handleResolve}
              disabled={!selectedAction || resolving}
              style={{
                background: selectedAction ? 'var(--green)' : '#E5E7EB',
                color: selectedAction ? 'var(--dark)' : '#9CA3AF',
                border: 'none',
                padding: '12px 24px',
                borderRadius: '8px',
                fontWeight: '900',
                cursor: selectedAction ? 'pointer' : 'not-allowed'
              }}
            >
              {resolving ? 'Resolving...' : 'Resolve Report'}
            </button>

            <button
              onClick={handleDismiss}
              disabled={resolving}
              style={{
                background: '#6B7280',
                color: 'white',
                border: 'none',
                padding: '12px 24px',
                borderRadius: '8px',
                fontWeight: '900',
                cursor: 'pointer'
              }}
            >
              Dismiss (No Violation)
            </button>
          </div>
        </div>
      )}

      {/* Moderation History */}
      {history.length > 0 && (
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          background: 'var(--off-white)',
          borderRadius: '12px',
          border: '3px solid var(--green)',
          overflow: 'hidden'
        }}>
          <div style={{
            background: 'var(--green)',
            padding: '16px'
          }}>
            <h2 style={{
              color: 'var(--dark)',
              fontSize: '20px',
              fontWeight: '900',
              margin: 0
            }}>
              User Moderation History
            </h2>
          </div>
          <div style={{ padding: '16px' }}>
            {history.map((action, index) => (
              <div
                key={action.id}
                style={{
                  padding: '12px',
                  marginBottom: index < history.length - 1 ? '12px' : 0,
                  background: '#F3F4F6',
                  borderRadius: '6px',
                  borderLeft: '4px solid var(--orange)'
                }}
              >
                <div style={{ fontWeight: '900', marginBottom: '4px' }}>
                  {action.action_label}
                </div>
                <div style={{ fontSize: '14px', fontWeight: '600', color: '#6B7280' }}>
                  {action.reason}
                </div>
                {action.details && (
                  <div style={{ fontSize: '13px', fontWeight: '600', color: '#6B7280', marginTop: '4px' }}>
                    {action.details}
                  </div>
                )}
                <div style={{ fontSize: '12px', fontWeight: '600', color: '#9CA3AF', marginTop: '4px' }}>
                  By {action.moderator.name} on {formatDate(action.created_at)}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Info Field Component
const InfoField = ({ label, value }) => (
  <div>
    <strong style={{ display: 'block', marginBottom: '4px', fontWeight: '900', fontSize: '13px', color: '#6B7280' }}>
      {label}
    </strong>
    <div style={{ fontWeight: '700', fontSize: '15px' }}>
      {value}
    </div>
  </div>
);

export default ReportDetail;
