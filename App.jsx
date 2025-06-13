
import React, { useState } from 'react';
import './App.css';
import Logs from './features/Logs';
import Dashboard from './features/Dashboard';
import Coupons from './features/Coupons';
import Notifications from './features/Notifications';
import Payments from './features/Payments';
import Roles from './features/Roles';
import Languages from './features/Languages';
import Transactions from './features/Transactions';
import Packages from './features/Packages';
import ReviewRequests from './features/ReviewRequests';

function App() {

  const [section, setSection] = useState('home');

  const renderSection = () => {
    switch(section) {
      case 'logs': return <Logs />;
      case 'dashboard': return <Dashboard />;
      case 'coupons': return <Coupons />;
      case 'notifications': return <Notifications />;
      case 'payments': return <Payments />;
      case 'roles': return <Roles />;
      case 'languages': return <Languages />;
      case 'transactions': return <Transactions />;
      case 'packages': return <Packages />;
      case 'review': return <ReviewRequests />;
      default: return (
        <div className="home">
          <h1>مرحباً بك في FastFlex</h1>
          <p>اختر من القائمة الجانبية للتنقل بين المميزات</p>
        </div>
      );
    }
  };

  return (

    <div style={{ display: 'flex', height: '100vh' }}>
      <div style={{ width: '200px', background: '#f3f3f3', padding: '10px', borderLeft: '3px solid #00f' }}>
        <h3>القائمة</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li><button onClick={() => setSection('dashboard')}>📊 الإحصائيات</button></li>
          <li><button onClick={() => setSection('logs')}>🧾 سجل العمليات</button></li>
          <li><button onClick={() => setSection('packages')}>📦 إدارة الباقات</button></li>
          <li><button onClick={() => setSection('review')}>✅ مراجعة الطلبات</button></li>
          <li><button onClick={() => setSection('coupons')}>🏷 كوبونات</button></li>
          <li><button onClick={() => setSection('notifications')}>🔔 إشعارات</button></li>
          <li><button onClick={() => setSection('payments')}>💳 الدفع</button></li>
          <li><button onClick={() => setSection('roles')}>👥 الصلاحيات</button></li>
          <li><button onClick={() => setSection('languages')}>🌐 اللغات</button></li>
          <li><button onClick={() => setSection('transactions')}>📑 التحويلات</button></li>
        </ul>
      </div>
      <div style={{ flex: 1, padding: '20px' }}>
        {renderSection()}
      </div>
    </div>

  );
}

export default App;
