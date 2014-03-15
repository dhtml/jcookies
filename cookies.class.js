function jcookies() {}
jcookies.prototype.online=function() {return location.protocol.indexOf("http")==-1 ? false : true;}
jcookies.prototype.set=function (cname,cvalue) { 
  if(this.online()) {document.cookie = cname + "=" + escape(cvalue) + "; expires=Mon, 31 Dec 2099 23:59:59 UTC;path=/;";}
  else {document.cookie = cname + "=" + escape(cvalue) + "; expires=Mon, 31 Dec 2099 23:59:59 UTC;";}
}
jcookies.prototype.erase=function(cname) {
  if(this.online()) {document.cookie = cname + "=" + "" + "; expires=Mon, 31 Dec 1899 23:59:59 UTC;path=/;";}
  else {document.cookie = cname + "=" + "" + "; expires=Mon, 31 Dec 1899 23:59:59 UTC;";}
}
jcookies.prototype.get=function(sName) { var aCookie = document.cookie.split("; ");
  for (var i=0; i < aCookie.length; i++)   {
    var aCrumb = aCookie[i].split("=");
    if (sName == aCrumb[0]) 
      return unescape(aCrumb[1]);
  }
  return "";
}
