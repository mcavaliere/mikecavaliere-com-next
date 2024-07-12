/**
 * Given a template and object with key-value pairs, it will replace all vars of the type we defined above and return a new string.
 *  Keep this centrally located so we can replace the guts with a better templating system later.
 */
export function replaceTemplateVars(template: string, vars: Record<string, string>): string {
  let newString = template;
  Object.keys(vars).forEach((key) => {
    const re = `\{\{${key}\}\}`;

    newString = newString.replace(new RegExp(re, 'g'), vars[key]);
  });
  return newString;
}
