function solution(id_pw, db) {
    const [id,pw] = id_pw
    var ary = db.filter((el) => el[0]===id);
    const ret = ary.length ? ary[0][1] === pw ? "login":"wrong pw" : "fail" 
    return ret;
}