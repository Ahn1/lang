

export function getLanguages(){
  return ["latin"];
}

export function getLectionsByLanguage(lang) {
  return Promise.all(["latin-1"].map(p => {
    return fetch("/lang/" + p + "/data.json").then(o => o.json()).then(o => {
      return {...o, audio: "/lang/" + p + "/" + o.audio, id: p}
    });
  }));
}

export function getLectionById(p){
  return fetch("/lang/" + p + "/data.json").then(o => o.json()).then(o => {
    return {...o, audio: "/lang/" + p + "/" + o.audio, id: p}
  });
}
