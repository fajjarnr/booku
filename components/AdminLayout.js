import React from 'react';
import Sidebar from './Sidebar';
import AdminNavbar from './AdminNavbar';
import HeaderStats from './HeaderStats';
import FooterAdmin from './FooterAdmin';

export default function AdminLayout({ children }) {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-gray-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          {children}
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
