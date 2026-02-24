import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { authApiCall, logout, isAuthenticated } from '../utils/api';

const ModerationDashboard = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState(null);
  const [recentReports, setRecentReports] = useState([]);
  const [overdueReports, setOverdueReports] = useState([]);
  const [filterStatus, setFilterStatus] = useState('pending');

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate('/poopstreats');
      return;
    }

    fetchDashboardData();
  }, [navigate]);

  const fetchDashboardData = async () => {
    setLoading(true);
    try {
      const data = await authApiCall('/admin/moderation/dashboard');

      setStats(data.stats);
      setRecentReports(data.recent_reports || []);
      setOverdueReports(data.overdue_reports || []);
    } catch (error) {
      console.error('Error fetching dashboard:', error);
      alert('Failed to load moderation dashboard');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/poopstreats');
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
        Loading moderation dashboard...
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
          Content Moderation
        </h1>
        <button
          onClick={handleLogout}
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
          Logout
        </button>
      </div>

      {/* Stats Cards */}
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto 32px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '16px'
      }}>
        <StatCard
          label="Total Reports"
          value={stats?.total_reports || 0}
          color="var(--green)"
        />
        <StatCard
          label="Pending"
          value={stats?.pending_reports || 0}
          color="var(--orange)"
        />
        <StatCard
          label="Overdue (>24h)"
          value={stats?.overdue_reports || 0}
          color={stats?.overdue_reports > 0 ? '#EF4444' : 'var(--green)'}
          alert={stats?.overdue_reports > 0}
        />
        <StatCard
          label="Resolved Today"
          value={stats?.resolved_today || 0}
          color="var(--green)"
        />
        <StatCard
          label="Avg Resolution Time"
          value={`${stats?.average_resolution_time || 0}h`}
          color="var(--green)"
        />
      </div>

      {/* Overdue Reports Alert */}
      {overdueReports.length > 0 && (
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto 32px',
          background: '#FEE2E2',
          border: '3px solid #EF4444',
          borderRadius: '12px',
          padding: '16px'
        }}>
          <h2 style={{
            color: '#991B1B',
            fontSize: '18px',
            fontWeight: '900',
            margin: '0 0 8px'
          }}>
            ⚠️ {overdueReports.length} Overdue Report{overdueReports.length !== 1 ? 's' : ''} (>24 hours)
          </h2>
          <p style={{
            color: '#991B1B',
            margin: '0 0 16px',
            fontWeight: '600'
          }}>
            App Store policy requires all reports to be reviewed within 24 hours.
          </p>
          <button
            onClick={() => navigate('/admin/reports?overdue=true')}
            style={{
              background: '#EF4444',
              color: 'white',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '6px',
              fontWeight: '700',
              cursor: 'pointer'
            }}
          >
            Review Overdue Reports
          </button>
        </div>
      )}

      {/* Recent Reports Table */}
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        background: 'var(--off-white)',
        borderRadius: '12px',
        border: '3px solid var(--green)',
        overflow: 'hidden'
      }}>
        <div style={{
          background: 'var(--green)',
          padding: '16px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <h2 style={{
            color: 'var(--dark)',
            fontSize: '20px',
            fontWeight: '900',
            margin: 0
          }}>
            Recent Reports
          </h2>
          <button
            onClick={() => navigate('/admin/reports')}
            style={{
              background: 'var(--dark)',
              color: 'var(--green)',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '6px',
              fontWeight: '700',
              cursor: 'pointer'
            }}
          >
            View All Reports
          </button>
        </div>

        {recentReports.length === 0 ? (
          <div style={{ padding: '32px', textAlign: 'center', fontWeight: '700' }}>
            No reports yet
          </div>
        ) : (
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: '#E5E7EB' }}>
                <th style={{ padding: '12px', textAlign: 'left', fontWeight: '900' }}>ID</th>
                <th style={{ padding: '12px', textAlign: 'left', fontWeight: '900' }}>Content</th>
                <th style={{ padding: '12px', textAlign: 'left', fontWeight: '900' }}>Reason</th>
                <th style={{ padding: '12px', textAlign: 'left', fontWeight: '900' }}>Reporter</th>
                <th style={{ padding: '12px', textAlign: 'left', fontWeight: '900' }}>Status</th>
                <th style={{ padding: '12px', textAlign: 'left', fontWeight: '900' }}>Created</th>
                <th style={{ padding: '12px', textAlign: 'left', fontWeight: '900' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {recentReports.map((report, index) => (
                <tr key={report.id} style={{
                  borderBottom: index < recentReports.length - 1 ? '1px solid #ddd' : 'none',
                  background: report.overdue ? '#FEE2E2' : 'transparent'
                }}>
                  <td style={{ padding: '12px', fontWeight: '700' }}>#{report.id}</td>
                  <td style={{ padding: '12px', fontWeight: '600' }}>
                    {report.reported_content}
                    <br />
                    <span style={{ fontSize: '12px', color: '#6B7280' }}>
                      {report.reportable_type}
                    </span>
                  </td>
                  <td style={{ padding: '12px', fontWeight: '600' }}>
                    {getReasonLabel(report.reason)}
                  </td>
                  <td style={{ padding: '12px', fontWeight: '600' }}>
                    {report.reporter?.name || 'N/A'}
                  </td>
                  <td style={{ padding: '12px' }}>
                    {getStatusBadge(report.status)}
                    {report.overdue && (
                      <span style={{
                        display: 'block',
                        color: '#EF4444',
                        fontSize: '11px',
                        fontWeight: '700',
                        marginTop: '4px'
                      }}>
                        OVERDUE
                      </span>
                    )}
                  </td>
                  <td style={{ padding: '12px', fontWeight: '600', fontSize: '13px' }}>
                    {formatDate(report.created_at)}
                  </td>
                  <td style={{ padding: '12px' }}>
                    <button
                      onClick={() => navigate(`/admin/reports/${report.id}`)}
                      style={{
                        background: 'var(--green)',
                        color: 'var(--dark)',
                        border: 'none',
                        padding: '6px 12px',
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
        )}
      </div>
    </div>
  );
};

// Stat Card Component
const StatCard = ({ label, value, color, alert }) => (
  <div style={{
    background: 'var(--off-white)',
    border: `3px solid ${alert ? '#EF4444' : color}`,
    borderRadius: '12px',
    padding: '20px',
    textAlign: 'center'
  }}>
    <div style={{
      fontSize: '36px',
      fontWeight: '900',
      color: color,
      marginBottom: '8px'
    }}>
      {value}
    </div>
    <div style={{
      fontSize: '14px',
      fontWeight: '700',
      color: 'var(--dark)'
    }}>
      {label}
    </div>
  </div>
);

export default ModerationDashboard;
