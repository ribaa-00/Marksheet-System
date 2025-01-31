
function run() {
    let eng = Number(document.getElementById("eng").value)
    let maths = Number(document.getElementById("maths").value)
    let phy = Number(document.getElementById("phy").value)
    let comp = Number(document.getElementById("comp").value)
    let urdu = Number(document.getElementById("urdu").value)
    let isl = Number(document.getElementById("isl").value)
    let pst = Number(document.getElementById("pst").value)

    if
        (eng > 98 || maths > 98 || phy > 98 || comp > 98 || urdu > 98 || isl > 98 || pst > 98) 
        
        {
        alert("entered marks are incorrect")

    }

    else {
        let obtvalue = eng + maths + phy + comp + urdu + isl + pst
        document.getElementById("obt").innerHTML = obtvalue
        let totalmarks = 700

        let per = obtvalue / totalmarks * 100
        document.getElementById("per").innerHTML = per + "%"
    }

}