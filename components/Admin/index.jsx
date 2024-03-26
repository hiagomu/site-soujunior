import axios from "axios"
import AdminHeader from "../commons/AdminHeader";
import { AdminQuickAccessSection } from "../commons/AdminQuickAccessSection";
import { AdminNewsSection } from "../commons/AdminNewsSection";
import AdminSidebar from "../commons/AdminSidebar";
import { AdminModal } from "../commons/AdminModal";
import { useEffect, useState } from "react";

export const Admin = () => {
  const [news, setNews] = useState([])
  const [refetch, setRefetch] = useState(false)

  useEffect(() => {
    const fetchNews = async () => {
        const response = await axios.get("http://localhost:5000/news");
        setNews(response.data);
    }
    fetchNews();
}, [refetch]);

  return (
    <div className="h-screen w-screen bg-white flex flex-col">
      <AdminHeader />
      <div className="flex">
        <AdminSidebar />
        <div className="flex flex-col items-center w-screen">
          <AdminQuickAccessSection />
          <div>
            <AdminModal setRefetch={setRefetch} />
            <AdminNewsSection news={news} setRefetch={setRefetch} />
          </div>
        </div>
      </div>
    </div>
  );
};
