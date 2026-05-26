import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class="flex-row w-full h-screen flex">
      {/* LEFT PANEL */}
      <div class="flex h-full w-1/3 bg-black flex-col border-r-2 border-white overflow-y-auto">
        
        {/* Header bar */}
        <div class="w-full h-11 flex flex-row shrink-0">
          <div class="bg-black w-1/2 h-auto flex justify-center align-middle items-center border-r-2 border-b-2 border-[#fffcfca9]">
            <h1 class="text-[#ffff] ml-3 mt-1 font-bold">blissmont ERP</h1>
          </div>
          <div class="h-auto w-full flex justify-center align-middle items-center border-b-2 border-[#fffcfca9]">
            <h2 class="text-white text-[10px] opacity-50">Production : V2</h2>
          </div>
        </div>

        {/* Hero Section */}
        <div class="px-8 pt-10 pb-6 border-b-2 border-[#fffcfca9]">
          <p class="text-[#4d9fff] text-[10px] font-semibold tracking-[2px] uppercase mb-4">
            Enterprise Resource Planning
          </p>
          <h2 class="text-white text-3xl font-bold leading-tight mb-2">
            One platform.<br />
            Every operation,<br />
            <span class="italic text-[#4d9fff]">unified.</span>
          </h2>
          <p class="text-white/40 text-[11px] leading-relaxed mt-4">
            BlissMontERP connects finance, operations, people, and customers
            into a single multi-tenant platform — giving every team the data
            and tools to act with clarity and speed.
          </p>
        </div>

        {/* Platform Modules */}
        <div class="px-8 py-8">
          <p class="text-white/40 text-[9px] font-semibold tracking-[2.5px] uppercase mb-6">
            Platform Modules
          </p>

          <div class="grid grid-cols-2 gap-x-6 gap-y-7">

            {/* Finance */}
            <div>
              <p class="text-[#4d9fff] text-[9px] font-bold tracking-[1.5px] uppercase mb-2">Finance</p>
              {["Accounting", "Payroll", "Budgeting", "Tax & Compliance"].map((item) => (
                <p key={item} class="text-white/50 text-[11px] leading-6 hover:text-white cursor-pointer transition-colors">
                  › {item}
                </p>
              ))}
            </div>

            {/* Operations */}
            <div>
              <p class="text-[#4d9fff] text-[9px] font-bold tracking-[1.5px] uppercase mb-2">Operations</p>
              {["Inventory", "Supply Chain", "Manufacturing", "Quality Control"].map((item) => (
                <p key={item} class="text-white/50 text-[11px] leading-6 hover:text-white cursor-pointer transition-colors">
                  › {item}
                </p>
              ))}
            </div>

            {/* People */}
            <div>
              <p class="text-white/40 text-[9px] font-bold tracking-[1.5px] uppercase mb-2">People</p>
              {["HR Management", "Recruitment", "Performance", "Time & Attendance"].map((item) => (
                <p key={item} class="text-white/50 text-[11px] leading-6 hover:text-white cursor-pointer transition-colors">
                  › {item}
                </p>
              ))}
            </div>

            {/* Customer */}
            <div>
              <p class="text-white/40 text-[9px] font-bold tracking-[1.5px] uppercase mb-2">Customer</p>
              {["CRM", "Service Desk", "Field Service", "Sales Pipeline"].map((item) => (
                <p key={item} class="text-white/50 text-[11px] leading-6 hover:text-white cursor-pointer transition-colors">
                  › {item}
                </p>
              ))}
            </div>

            {/* Platform */}
            <div>
              <p class="text-white/40 text-[9px] font-bold tracking-[1.5px] uppercase mb-2">Platform</p>
              {["Workflow Engine", "Reporting & BI", "Integrations", "Audit & Logs"].map((item) => (
                <p key={item} class="text-white/50 text-[11px] leading-6 hover:text-white cursor-pointer transition-colors">
                  › {item}
                </p>
              ))}
            </div>

            {/* Procurement */}
            <div>
              <p class="text-white/40 text-[9px] font-bold tracking-[1.5px] uppercase mb-2">Procurement</p>
              {["Purchase Orders", "Supplier Network", "Contract Mgmt", "Spend Analytics"].map((item) => (
                <p key={item} class="text-white/50 text-[11px] leading-6 hover:text-white cursor-pointer transition-colors">
                  › {item}
                </p>
              ))}
            </div>

          </div>
        </div>

      </div>

      {/* RIGHT PANEL */}
     <div class="h-full w-auto min-w-auto flex-1 flex justify-center items-center align-middle">
  <div class="w-[500px] h-[500px] bg-white border-2 border-gray-200 flex flex-col">
    
    {/* Header bar - untouched */}
    <div class="w-full h-10 flex flex-row border-b-2 border-gray-200">
      <div class="w-14 h-10 bg-gray-100 justify-center items-center flex border-b-2 border-r-2 border-blue-300">
        <i class="bi bi-person-bounding-box "></i>
      </div>
      <div class="flex justify-center items-center p-2">
        <h2 class="font-bold">Sign In</h2>
      </div>
      <div class="flex justify-center items-center p-2 h-10 w-auto">
        <p class="font-bold text-[14px] opacity-50">ENTER CREDENTIALS TO ACCESS ERP</p>
      </div>
      <div class="w-auto h-10 justify-center items-center flex p-2 border-l-2 border-gray-200 ml-auto">
        <p class="font-bold text-[14px] opacity-50 p-2">AUTH 001</p>
      </div>
    </div>

    {/* Login Form Body */}
    <div class="flex flex-col flex-1 px-8 py-5 justify-between">

      {/* Fields */}
      <div class="flex flex-col gap-4">
        <p class="text-[11px] text-gray-400">Enter your credentials to access the ERP system.</p>

        {/* User ID */}
        <div class="flex flex-col gap-1">
          <label class="text-[10px] font-bold tracking-widest text-gray-500 uppercase">
            User ID / Email Address
          </label>
          <div class="flex flex-row items-center border border-blue-300 bg-blue-50 px-3 gap-2">
            <i class="bi bi-person text-gray-400 text-sm"></i>
            <input
              type="email"
              placeholder="you@example.com"
              class="flex-1 bg-transparent outline-none text-[13px] py-2 text-gray-700 placeholder:text-gray-400"
            />
          </div>
        </div>

        {/* Password */}
        <div class="flex flex-col gap-1">
          <div class="flex justify-between items-center">
            <label class="text-[10px] font-bold tracking-widest text-gray-500 uppercase">
              Password
            </label>
            <a href="#" class="text-[11px] text-blue-500 hover:underline">Forgot password?</a>
          </div>
          <div class="flex flex-row items-center border border-gray-300 bg-white px-3 gap-2">
            <i class="bi bi-lock text-gray-400 text-sm"></i>
            <input
              type="password"
              placeholder="••••••••••••"
              class="flex-1 bg-transparent outline-none text-[13px] py-2 text-gray-700 placeholder:text-gray-400"
            />
            <i class="bi bi-eye text-gray-400 text-sm cursor-pointer hover:text-gray-600"></i>
          </div>
        </div>

        {/* Remember me */}
        <div class="flex items-center gap-2">
          <input type="checkbox" id="remember" class="w-3.5 h-3.5 accent-blue-600" />
          <label for="remember" class="text-[12px] text-gray-500">Keep me signed in on this device</label>
        </div>

        {/* Sign In Button */}
        <button class="w-full bg-blue-700 hover:bg-blue-800 text-white text-[13px] font-semibold py-2.5 flex items-center justify-center gap-2 transition-colors">
          <i class="bi bi-box-arrow-in-right"></i>
          Sign In to BlissMontERP
        </button>
      </div>

      {/* Footer */}
      <div class="flex flex-col gap-2 border-t border-gray-200 pt-4">
        <p class="text-center text-[12px] text-gray-400">
          <i class="bi bi-star mr-1"></i>
          Don't have an account?{" "}
          <a href="#" class="text-blue-600 font-semibold hover:underline">Sign Up</a>
        </p>
        <div class="flex justify-center gap-4 text-[10px] text-gray-300">
          <span>© 2026 BlissMontERP Inc.</span>
          <a href="#" class="hover:text-gray-500">Privacy Policy</a>
          <a href="#" class="hover:text-gray-500">Terms of Use</a>
          <a href="#" class="hover:text-gray-500">Support</a>
        </div>
      </div>

    </div>
  </div>
</div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "blissmont-ERP",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};