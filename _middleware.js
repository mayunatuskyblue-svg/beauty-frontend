// functions/_middleware.js
export const onRequest = async ({ request, next }) => {
  const response = await next();
  const url = new URL(request.url);

  // /assets/css/ 配下の .css ファイルだけ MIME 修正
  if (url.pathname.startsWith('/assets/css/') && url.pathname.endsWith('.css')) {
    response.headers.set('Content-Type', 'text/css; charset=utf-8');
  }

  return response;
};
