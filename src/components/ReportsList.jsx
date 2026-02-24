import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { authApiCall, isAuthenticated } from '../utils/api';

const ReportsList = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [reports, setReports] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);

  const statusFilter = searchParams.get('status') || 'pending';
  const overdueFilter = searchParams.get('overdue') === 'true';

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate('/poopstreats');
      return;
    }

    fetchReports();
  }, [navigate, statusFilter, overdueFilter, page]);

  const fetchReports = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (statusFilter && statusFilter !== 'all') params.append('status', statusFilter);
      if (overdueFilter) params.append('overdue', 'true');
      params.append('page', page);
      params.append('per_page', 20);

      const data = await authApiCall(`/admin/moderation/reports?${params.toString()}`);

      setReports(data.reports || []);
      setTotal(data.total || 0);
    } catch (error) {
      console.error('Error fetching reports:', error);
      alert('Failed to load reports');
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (newStatus) => {
    const params = new URLSearchParams();
    if (newStatus && newStatus !== 'all') params.append('status', newStatus);
    if (overdueFilter) params.append('overdue', 'true');

    setSearchParams(params);
    setPage(1);
  };

  const toggleOverdueFilter = () => {
    const params = new URLSearchParams();
    if (statusFilter && statusFilter !== 'all') params.append('status', statusFilter);
    if (!overdueFilter) params.append('overdue', 'true');

    setSearchParams(params);
    setPage(1);
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
        padding: '4px 8px',
        borderRadius: '4px',
        fontSize: '12px',
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
        Loading reports...
      </div>
    );
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'var(--dark)',
      padding: '32px 16px'
    }}>
      {/* Header */}
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto 32px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <h1 style={{
          color: 'var(--green)',
          fontSize: '32px',
          fontWeight: '900',
          margin: 0
        }}>
          All Reports ({total})
        </h1>
        <button
          onClick={() => navigate('/admin/moderation')}
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
          ← Back to Dashboard
        </button>
      </div>

      {/* Filters */}
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto 16px',
        background: 'var(--off-white)',
        borderRadius: '12px',
        border: '3px solid var(--green)',
        padding: '16px'
      }}>
        <div style={{
          display: 'flex',
          gap: '8px',
          flexWrap: 'wrap',
          marginBottom: '12px'
        }}>
          <FilterButton
            label="All"
            active={statusFilter === 'all'}
            onClick={() => handleFilterChange('all')}
          />
          <FilterButton
            label="Pending"
            active={statusFilter === 'pending'}
            onClick={() => handleFilterChange('pending')}
          />
          <FilterButton
            label="Reviewing"
            active={statusFilter === 'reviewing'}
            onClick={() => handleFilterChange('reviewing')}
          />
          <FilterButton
            label="Resolved"
            active={statusFilter === 'resolved'}
            onClick={() => handleFilterChange('resolved')}
          />
          <FilterButton
            label="Dismissed"
            active={statusFilter === 'dismissed'}
            onClick={() => handleFilterChange('dismissed')}
          />
        </div>
        <div>
          <label style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontWeight: '700',
            cursor: 'pointer'
          }}>
            <input
              type="checkbox"
              checked={overdueFilter}
              onChange={toggleOverdueFilter}
              style={{ cursor: 'pointer' }}
            />
            Show only overdue reports (>24 hours)
          </label>
        </div>
      </div>

      {/* Reports Table */}
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        background: 'var(--off-white)',
        borderRadius: '12px',
        border: '3px solid var(--green)',
        overflow: 'hidden'
      }}>
        {reports.length === 0 ? (
          <div style={{ padding: '32px', textAlign: 'center', fontWeight: '700' }}>
            No reports found
          </div>
        ) : (
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '800px' }}>
              <thead>
                <tr style={{ background: 'var(--green)' }}>
                  <th style={{ padding: '16px', textAlign: 'left', fontWeight: '900', color: 'var(--dark)' }}>ID</th>
                  <th style={{ padding: '16px', textAlign: 'left', fontWeight: '900', color: 'var(--dark)' }}>Content</th>
                  <th style={{ padding: '16px', textAlign: 'left', fontWeight: '900', color: 'var(--dark)' }}>Reason</th>
                  <th style={{ padding: '16px', textAlign: 'left', fontWeight: '900', color: 'var(--dark)' }}>Reporter</th>
                  <th style={{ padding: '16px', textAlign: 'left', fontWeight: '900', color: 'var(--dark)' }}>Reported User</th>
                  <th style={{ padding: '16px', textAlign: 'left', fontWeight: '900', color: 'var(--dark)' }}>Status</th>
                  <th style={{ padding: '16px', textAlign: 'left', fontWeight: '900', color: 'var(--dark)' }}>Created</th>
                  <th style={{ padding: '16px', textAlign: 'left', fontWeight: '900', color: 'var(--dark)' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {reports.map((report, index) => (
                  <tr key={report.id} style={{
                    borderBottom: index < reports.length - 1 ? '1px solid #ddd' : 'none',
                    background: report.overdue ? '#FEE2E2' : 'transparent'
                  }}>
                    <td style={{ padding: '16px', fontWeight: '700' }}>
                      #{report.id}
                      {report.overdue && (
                        <span style={{
                          display: 'block',
                          color: '#EF4444',
                          fontSize: '10px',
                          fontWeight: '700',
                          marginTop: '2px'
                        }}>
                          OVERDUE
                        </span>
                      )}
                    </td>
                    <td style={{ padding: '16px', fontWeight: '600' }}>
                      {report.reported_content}
                      <br />
                      <span style={{ fontSize: '12px', color: '#6B7280' }}>
                        {report.reportable_type}
                      </span>
                    </td>
                    <td style={{ padding: '16px', fontWeight: '600' }}>
                      {getReasonLabel(report.reason)}
                    </td>
                    <td style={{ padding: '16px', fontWeight: '600' }}>
                      {report.reporter?.name || 'N/A'}
                      <br />
                      <span style={{ fontSize: '12px', color: '#6B7280' }}>
                        @{report.reporter?.username || 'N/A'}
                      </span>
                    </td>
                    <td style={{ padding: '16px', fontWeight: '600' }}>
                      {report.reported_user ? (
                        <>
                          {report.reported_user.name}
                          <br />
                          <span style={{ fontSize: '12px', color: '#6B7280' }}>
                            Warnings: {report.reported_user.warnings_count}/3
                          </span>
                        </>
                      ) : (
                        'N/A'
                      )}
                    </td>
                    <td style={{ padding: '16px' }}>
                      {getStatusBadge(report.status)}
                    </td>
                    <td style={{ padding: '16px', fontWeight: '600', fontSize: '13px' }}>
                      {formatDate(report.created_at)}
                    </td>
                    <td style={{ padding: '16px' }}>
                      <button
                        onClick={() => navigate(`/admin/reports/${report.id}`)}
                        style={{
                          background: 'var(--green)',
                          color: 'var(--dark)',
                          border: 'none',
                          padding: '8px 16px',
                          borderRadius: '4px',
                          fontWeight: '700',
                          cursor: 'pointer',
                          fontSize: '12px'
                        }}
                      >
                        Review
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Pagination */}
        {total > 20 && (
          <div style={{
            padding: '16px',
            display: 'flex',
            justifyContent: 'center',
            gap: '8px',
            borderTop: '1px solid #ddd'
          }}>
            <button
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
              style={{
                background: page === 1 ? '#E5E7EB' : 'var(--green)',
                color: page === 1 ? '#9CA3AF' : 'var(--dark)',
                border: 'none',
                padding: '8px 16px',
                borderRadius: '4px',
                fontWeight: '700',
                cursor: page === 1 ? 'not-allowed' : 'pointer'
              }}
            >
              Previous
            </button>
            <span style={{ padding: '8px 16px', fontWeight: '700' }}>
              Page {page} of {Math.ceil(total / 20)}
            </span>
            <button
              disabled={page >= Math.ceil(total / 20)}
              onClick={() => setPage(page + 1)}
              style={{
                background: page >= Math.ceil(total / 20) ? '#E5E7EB' : 'var(--green)',
                color: page >= Math.ceil(total / 20) ? '#9CA3AF' : 'var(--dark)',
                border: 'none',
                padding: '8px 16px',
                borderRadius: '4px',
                fontWeight: '700',
                cursor: page >= Math.ceil(total / 20) ? 'not-allowed' : 'pointer'
              }}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// Filter Button Component
const FilterButton = ({ label, active, onClick }) => (
  <button
    onClick={onClick}
    style={{
      background: active ? 'var(--green)' : 'transparent',
      color: active ? 'var(--dark)' : '#6B7280',
      border: `2px solid ${active ? 'var(--green)' : '#D1D5DB'}`,
      padding: '8px 16px',
      borderRadius: '6px',
      fontWeight: '700',
      cursor: 'pointer'
    }}
  >
    {label}
  </button>
);

export default ReportsList;
