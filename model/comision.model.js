class ComisionPrimaSbs  {
  
    constructor(NombreComision, ComisionFija,ComisionSobreFlujo,ComisionSobreFlujoMixta,ComisionAnualMixta,PrimaSeguro,AporteObligatorio,RemuneracionMaxima){
          this.NombreComision= NombreComision;
          this.ComisionFija= ComisionFija;
          this.ComisionSobreFlujo= ComisionSobreFlujo;
          this.ComisionSobreFlujoMixta =ComisionSobreFlujoMixta;
          this.ComisionAnualMixta= ComisionAnualMixta;
          this.PrimaSeguro = PrimaSeguro;
          this.AporteObligatorio = AporteObligatorio;
          this.RemuneracionMaxima= RemuneracionMaxima;
    }
}

module.exports = ComisionPrimaSbs;