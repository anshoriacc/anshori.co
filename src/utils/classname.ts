function e(r: any) {
  var o,
    t,
    f = "";
  if ("string" == typeof r || "number" == typeof r) f += r;
  else if ("object" == typeof r)
    if (Array.isArray(r))
      for (o = 0; o < r.length; o++)
        r[o] && (t = e(r[o])) && (f && (f += " "), (f += t));
    else for (o in r) r[o] && (f && (f += " "), (f += o));
  return f;
}

function r() {
  for (var r, o, t = 0, f = ""; t < arguments.length; )
    (r = arguments[t++]) && (o = e(r)) && (f && (f += " "), (f += o));
  return f;
}

export default r;
