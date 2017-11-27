/**
 * @fileoverview Rule to enforce entire lodash library is not imported
 * @author Matt Smith
 * @copyright 2015 Matt Smith. All rights reserved.
 */

export default function(context) {
  return {
    ImportDeclaration(node) {
      if (node.source.value === 'lodash' || node.source.value === 'lodash-compat') {
        if (node.specifiers.length === 0 || node.specifiers[0].type === 'ImportDefaultSpecifier') {
          context.report(node.source, 'Importing the entire lodash library is not permitted, please import the specific functions you need');
          return;
        }
        for (const s of node.specifiers) {
          if (s.imported.name === 'isArray') {
            context.report(node.source, 'Importing lodash isArray is not recommended use Array.isArray instead');
            return;
          }
        }
      }
      if (node.source.value === 'lodash/isArray') {
        context.report(node.source, 'Importing lodash isArray is not recommended use Array.isArray instead');
      }
    }
  };
}
