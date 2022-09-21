import React from "react";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@mui/icons-material";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div class="flex flex-row min-h-screen bg-gray-100 text-gray-500">
      <aside class="sidebar w-64 md:shadow transform -translate-x-full md:translate-x-0 transition-transform duration-150 ease-in bg-gray-500">
        <div class="sidebar-header flex items-center justify-center py-4">
          <div class="inline-flex">
            <Link to="/" class="inline-flex flex-row items-center">
              <span class="leading-10 text-gray-100 text-2xl font-bold ml-1 uppercase">
                VCA
              </span>
            </Link>
          </div>
        </div>
        <div class="sidebar-content px-4 py-6">
          <ul class="flex flex-col w-full">
            <li class="my-px">
              <Link
                to="/"
                class="flex flex-row items-center h-10 px-3 rounded-lg text-gray-700 bg-gray-100"
              >
                <span class="flex items-center justify-center text-lg text-gray-400">
                  <HomeIcon />
                </span>
                <span class="ml-3">Dashboard</span>
              </Link>
            </li>
            <li className="my-px">
              <Link
                to="/"
                class="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
              >
                <LineStyle />
                <span class="ml-3">Home</span>
              </Link>
            </li>
            <li className="my-px">
              <Link
                to="/"
                class="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
              >
                <Timeline />
                <span class="ml-3">Analytics</span>
              </Link>
            </li>
            <li className="my-px">
              <Link
                to="/"
                class="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
              >
                <TrendingUp />
                <span class="ml-3">Sales</span>
              </Link>
            </li>
            <li class="my-px">
              <span class="flex font-medium text-sm text-gray-300 px-4 my-4 uppercase">
                Quick Menu
              </span>
            </li>
            <li className="my-px">
              <Link
                to="/users"
                class="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
              >
                <PermIdentity />
                <span class="ml-3">Users</span>
              </Link>
            </li>
            <li className="my-px">
              <Link
                to="/products"
                class="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
              >
                <Storefront />
                <span class="ml-3">Products</span>
              </Link>
            </li>
            <li className="my-px">
              <Link
                to="/"
                class="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
              >
                <AttachMoney />
                <span class="ml-3">Transactions</span>
              </Link>
            </li>
            <li className="my-px">
              <Link
                to="/"
                class="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
              >
                <BarChart />
                <span class="ml-3">Reports</span>
              </Link>
            </li>

            <li class="my-px">
              <span class="flex font-medium text-sm text-gray-300 px-4 my-4 uppercase">
                Notifications
              </span>
            </li>
            <li className="my-px">
              <a
                href="#"
                class="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
              >
                <MailOutline />
                <span class="ml-3">Mail</span>
              </a>
            </li>
            <li className="my-px">
              <a
                href="#"
                class="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
              >
                <DynamicFeed />
                <span class="ml-3">Feedback</span>
              </a>
            </li>
            <li className="my-px">
              <a
                href="#"
                class="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
              >
                <ChatBubbleOutline />
                <span class="ml-3">Messages</span>
              </a>
            </li>
            <li class="my-px">
              <span class="flex font-medium text-sm text-gray-300 px-4 my-4 uppercase">
                Staff
              </span>
            </li>
            <li className="my-px">
              <Link
                to="users"
                class="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
              >
                <WorkOutline />
                <span class="ml-3">Manage</span>
              </Link>
            </li>
            <li className="my-px">
              <a
                href="#"
                class="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
              >
                <Timeline />
                <span class="ml-3">Analytics</span>
              </a>
            </li>
            <li className="my-px">
              <a
                href="#"
                class="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
              >
                <Report />
                <span class="ml-3">Reports</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
