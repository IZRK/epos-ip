export default function htmlmin(content, pathPrefix = "/") {
  const outputPath = this.page.outputPath || "";
  const isHtml = outputPath.toLowerCase().endsWith(".html") || /^\s*<!doctype html>/i.test(content);
  if (isHtml) {
    const prefix = pathPrefix === "/" ? "" : `/${pathPrefix.replace(/^\/+|\/+$/g, "")}`;
    const prefixed = prefix
      ? content.replace(
          /\b(href|src|poster|action)=(['"])\/(?!\/)/gi,
          (_match, attribute, quote) => `${attribute}=${quote}${prefix}/`
        )
      : content;
    return prefixed
      .replace(/<!--(?!\[if)[\s\S]*?-->/g, "")
      .replace(/[ \t]+\n/g, "\n")
      .replace(/\n{3,}/g, "\n\n");
  }
  return content;
}
