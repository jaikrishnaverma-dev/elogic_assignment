export function toTitleCase(str) {
    return str.split('_').map(el=>{
     return el.replace(/\b\w/g, function (match) {
        return match.toUpperCase();
      });
    }).join(' ')
  }