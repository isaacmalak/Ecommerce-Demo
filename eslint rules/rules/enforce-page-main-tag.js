const rule = {
  meta: {
    type: "problem",
    docs: {
      description: "Root JSX of page.tsx must be <main>",
    },
  },
  create(context) {
    const fileName = context.getFilename();
    if (!fileName.endsWith("page.tsx")) return {};

    return {
      ReturnStatement(mode) {
        const el = node.argument;
        if (!el?.openElement) return;
        const name = el.openElement.name?.name;
        if(name != "main"){
            context.report({
                node, message: "Root element must be <main>."
            })
        }
      },
    };
  },
};

export default rule;
