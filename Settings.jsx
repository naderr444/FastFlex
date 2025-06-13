
import React, { useState } from 'react';

function Settings() {
  const [oldPass, setOldPass] = useState('');
  const [newPass, setNewPass] = useState('');
  const [confirm, setConfirm] = useState('');
  const [toggles, setToggles] = useState({
    logs: true,
    dashboard: true,
    coupons: true,
    notifications: true,
    payments: true,
    roles: true,
    languages: true,
    transactions: true,
    packages: true,
    review: true
  });

  const handleChange = () => {
    if (!oldPass || !newPass || !confirm) {
      alert('كل الخانات مطلوبة');
      return;
    }
    if (newPass !== confirm) {
      alert('كلمة السر غير متطابقة');
      return;
    }
    alert('✅ تم تغيير كلمة السر بنجاح (وهمياً)');
  };

  const toggleFeature = (key) => {
    setToggles({ ...toggles, [key]: !toggles[key] });
  };

  return (
    <div style={{ direction: 'rtl', padding: '20px' }}>
      <h2>⚙️ إعدادات الحساب</h2>
      <div style={{ background: '#f9f9f9', padding: '10px', marginBottom: '20px' }}>
        <label>كلمة السر الحالية</label><br />
        <input type="password" value={oldPass} onChange={e => setOldPass(e.target.value)} /><br />
        <label>كلمة السر الجديدة</label><br />
        <input type="password" value={newPass} onChange={e => setNewPass(e.target.value)} /><br />
        <label>تأكيد كلمة السر</label><br />
        <input type="password" value={confirm} onChange={e => setConfirm(e.target.value)} /><br />
        <button onClick={handleChange}>تغيير</button>
      </div>

      <div style={{ background: '#eef', padding: '15px' }}>
        <h3>🔧 إدارة تشغيل / إيقاف المميزات</h3>
        {Object.keys(toggles).map(key => (
          <div key={key}>
            <label>
              <input type="checkbox" checked={toggles[key]} onChange={() => toggleFeature(key)} />
              تفعيل {key}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Settings;
