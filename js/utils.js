let supabaseClient = null;
// 连接 SupaBase（替换为你的 Project URL 和 anon 密钥）
function getClient() {
    if (!supabaseClient) {
        const supabaseUrl = "https://gidktxcpudzdaqwtkeqq.supabase.co";
        const supabaseKey = "MAzju123";
        supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);
    }
    return supabaseClient;
}

// 解析 URL 参数（如从 problem.html?id=P1001 中获取 id=P1001）
function getArgs(key) {
    const args = {};
    for (const [k, v] of new URLSearchParams(window.location.search).entries()) {
        args[k] = v;
    }
    return key ? args[key] : args;
}

// 动态加载页面对应的 JS（如 problem.html 加载 problem.js）
document.addEventListener('DOMContentLoaded', function() {
    const currentPath = window.location.pathname;
    let scriptPath = currentPath.replace(/\.html$/, '.js');
    if (!scriptPath.endsWith(".js")) scriptPath += ".js";
    const script = document.createElement('script');
    script.src = scriptPath;
    document.head.appendChild(script);
});
