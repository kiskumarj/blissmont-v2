import { component$, useSignal } from "@builder.io/qwik";
import Sidebar from "~/components/Sidebar";
import Navbar from "~/components/Navbar";
import type { DocumentHead } from "@builder.io/qwik-city";
import Donutchart from "~/components/chart/Donutchart";
import Barchart from "~/components/chart/Barchart";
import { barData, donutData } from "~/components/chart/chartdta";
import { useLogout } from "~/components/api/post";

export { useLogout };

export default component$(() => {
  const isOpen = useSignal<boolean>(true);
  const logoutAction = useLogout();



  return (
    <div class="w-full h-screen flex flex-col">

      <Navbar isOpen={isOpen} />

      <div class="flex flex-row flex-1 overflow-hidden">
        <Sidebar isOpen={isOpen} logoutAction={logoutAction} />

        <main class="flex-1 bg-gray-100 overflow-y-auto p-4 flex flex-col gap-4">

          {/* Welcome Bar */}
          <div class="w-full h-12 flex flex-row items-center gap-3 px-2">
            <div class="w-10 h-10 bg-white border border-gray-200 flex items-center justify-center">
              <i class="bi bi-person text-gray-400"></i>
            </div>
            <h1 class="text-black font-bold text-[15px]">Welcome to Blissmont ERP Kishore!</h1>
          </div>

          {/* Top Row — Status Cards + Table */}
          <div class="w-full flex flex-row gap-4">

            {/* Status & Requirements */}
            <div class="w-1/2 bg-white border border-gray-200 p-4 flex flex-col gap-3">
              <h2 class="text-[13px] font-semibold text-gray-600">Status & Requirements</h2>

              {/* Row 1 */}
              <div class="flex flex-row gap-3">
                <div class="flex-1 flex flex-row items-center gap-2 border border-gray-200 p-2 hover:border-blue-300 transition-colors">
                  <div class="w-8 h-8 bg-blue-50 border border-blue-200 flex items-center justify-center flex-shrink-0">
                    <i class="bi bi-receipt text-blue-500 text-sm"></i>
                  </div>
                  <div>
                    <p class="text-[11px] text-gray-400">Open Invoice</p>
                    <p class="text-[13px] font-bold text-gray-700">24</p>
                  </div>
                </div>
                <div class="flex-1 flex flex-row items-center gap-2 border border-gray-200 p-2 hover:border-green-300 transition-colors">
                  <div class="w-8 h-8 bg-green-50 border border-green-200 flex items-center justify-center flex-shrink-0">
                    <i class="bi bi-receipt-cutoff text-green-500 text-sm"></i>
                  </div>
                  <div>
                    <p class="text-[11px] text-gray-400">Total Invoice</p>
                    <p class="text-[13px] font-bold text-gray-700">142</p>
                  </div>
                </div>
              </div>

              {/* Row 2 */}
              <div class="flex flex-row gap-3">
                <div class="flex-1 flex flex-row items-center gap-2 border border-gray-200 p-2 hover:border-amber-300 transition-colors">
                  <div class="w-8 h-8 bg-amber-50 border border-amber-200 flex items-center justify-center flex-shrink-0">
                    <i class="bi bi-briefcase text-amber-500 text-sm"></i>
                  </div>
                  <div>
                    <p class="text-[11px] text-gray-400">Jobs</p>
                    <p class="text-[13px] font-bold text-gray-700">18</p>
                  </div>
                </div>
                <div class="flex-1 flex flex-row items-center gap-2 border border-gray-200 p-2 hover:border-red-300 transition-colors">
                  <div class="w-8 h-8 bg-red-50 border border-red-200 flex items-center justify-center flex-shrink-0">
                    <i class="bi bi-ticket-perforated text-red-500 text-sm"></i>
                  </div>
                  <div>
                    <p class="text-[11px] text-gray-400">Tickets</p>
                    <p class="text-[13px] font-bold text-gray-700">7</p>
                  </div>
                </div>
              </div>

              {/* Row 3 */}
              <div class="flex flex-row gap-3">
                <div class="flex-1 flex flex-row items-center gap-2 border border-gray-200 p-2 hover:border-purple-300 transition-colors">
                  <div class="w-8 h-8 bg-purple-50 border border-purple-200 flex items-center justify-center flex-shrink-0">
                    <i class="bi bi-people text-purple-500 text-sm"></i>
                  </div>
                  <div>
                    <p class="text-[11px] text-gray-400">Customers</p>
                    <p class="text-[13px] font-bold text-gray-700">310</p>
                  </div>
                </div>
                <div class="flex-1 flex flex-row items-center gap-2 border border-gray-200 p-2 hover:border-teal-300 transition-colors">
                  <div class="w-8 h-8 bg-teal-50 border border-teal-200 flex items-center justify-center flex-shrink-0">
                    <i class="bi bi-box-seam text-teal-500 text-sm"></i>
                  </div>
                  <div>
                    <p class="text-[11px] text-gray-400">Products</p>
                    <p class="text-[13px] font-bold text-gray-700">86</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Details of Requirements — Table */}
            <div class="flex-1 bg-white border border-gray-200 flex flex-col">
              <div class="w-full px-4 py-2 bg-gray-100 border-b border-gray-200 flex items-center gap-2">
                <i class="bi bi-table text-gray-500 text-sm"></i>
                <h2 class="text-[13px] font-semibold text-gray-600">Details of Requirements</h2>
              </div>
              <div class="overflow-x-auto">
                <table class="w-full text-[12px] text-gray-600 border-collapse">
                  <thead>
                    <tr class="bg-gray-50 border-b border-gray-200">
                      <th class="text-left px-4 py-2 font-semibold text-gray-500 border-r border-gray-200">#</th>
                      <th class="text-left px-4 py-2 font-semibold text-gray-500 border-r border-gray-200">Item</th>
                      <th class="text-left px-4 py-2 font-semibold text-gray-500 border-r border-gray-200">Category</th>
                      <th class="text-left px-4 py-2 font-semibold text-gray-500 border-r border-gray-200">Status</th>
                      <th class="text-left px-4 py-2 font-semibold text-gray-500">Priority</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td class="px-4 py-2 border-r border-gray-100">01</td>
                      <td class="px-4 py-2 border-r border-gray-100">Open Invoice</td>
                      <td class="px-4 py-2 border-r border-gray-100">Finance</td>
                      <td class="px-4 py-2 border-r border-gray-100">
                        <span class="px-2 py-0.5 bg-yellow-100 text-yellow-700 rounded text-[10px] font-medium">Pending</span>
                      </td>
                      <td class="px-4 py-2">
                        <span class="px-2 py-0.5 bg-red-100 text-red-600 rounded text-[10px] font-medium">High</span>
                      </td>
                    </tr>
                    <tr class="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td class="px-4 py-2 border-r border-gray-100">02</td>
                      <td class="px-4 py-2 border-r border-gray-100">Total Invoice</td>
                      <td class="px-4 py-2 border-r border-gray-100">Finance</td>
                      <td class="px-4 py-2 border-r border-gray-100">
                        <span class="px-2 py-0.5 bg-green-100 text-green-700 rounded text-[10px] font-medium">Completed</span>
                      </td>
                      <td class="px-4 py-2">
                        <span class="px-2 py-0.5 bg-blue-100 text-blue-600 rounded text-[10px] font-medium">Medium</span>
                      </td>
                    </tr>
                    <tr class="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td class="px-4 py-2 border-r border-gray-100">03</td>
                      <td class="px-4 py-2 border-r border-gray-100">Jobs</td>
                      <td class="px-4 py-2 border-r border-gray-100">Operations</td>
                      <td class="px-4 py-2 border-r border-gray-100">
                        <span class="px-2 py-0.5 bg-blue-100 text-blue-700 rounded text-[10px] font-medium">In Progress</span>
                      </td>
                      <td class="px-4 py-2">
                        <span class="px-2 py-0.5 bg-red-100 text-red-600 rounded text-[10px] font-medium">High</span>
                      </td>
                    </tr>
                    <tr class="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td class="px-4 py-2 border-r border-gray-100">04</td>
                      <td class="px-4 py-2 border-r border-gray-100">Supply Chain</td>
                      <td class="px-4 py-2 border-r border-gray-100">Operations</td>
                      <td class="px-4 py-2 border-r border-gray-100">
                        <span class="px-2 py-0.5 bg-yellow-100 text-yellow-700 rounded text-[10px] font-medium">Pending</span>
                      </td>
                      <td class="px-4 py-2">
                        <span class="px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-[10px] font-medium">Low</span>
                      </td>
                    </tr>
                    <tr class="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td class="px-4 py-2 border-r border-gray-100">05</td>
                      <td class="px-4 py-2 border-r border-gray-100">HR Management</td>
                      <td class="px-4 py-2 border-r border-gray-100">People</td>
                      <td class="px-4 py-2 border-r border-gray-100">
                        <span class="px-2 py-0.5 bg-green-100 text-green-700 rounded text-[10px] font-medium">Completed</span>
                      </td>
                      <td class="px-4 py-2">
                        <span class="px-2 py-0.5 bg-blue-100 text-blue-600 rounded text-[10px] font-medium">Medium</span>
                      </td>
                    </tr>
                    <tr class="hover:bg-gray-50 transition-colors">
                      <td class="px-4 py-2 border-r border-gray-100">06</td>
                      <td class="px-4 py-2 border-r border-gray-100">Audit & Logs</td>
                      <td class="px-4 py-2 border-r border-gray-100">Platform</td>
                      <td class="px-4 py-2 border-r border-gray-100">
                        <span class="px-2 py-0.5 bg-blue-100 text-blue-700 rounded text-[10px] font-medium">In Progress</span>
                      </td>
                      <td class="px-4 py-2">
                        <span class="px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-[10px] font-medium">Low</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>

          {/* Bottom Row — Charts */}
          <div class="w-full flex flex-row gap-4 h-80 p-2">
            <Donutchart
              canvasId={donutData.canvasId}
              title={donutData.title}
              labels={donutData.labels}
              data={donutData.data}
              colors={donutData.colors}
            />
            <Barchart
              canvasId={barData.canvasId}
              title={barData.title}
              labels={barData.labels}
              datasets={barData.datasets}
            />
          
          </div>

        </main>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "blissmont-Admin",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};