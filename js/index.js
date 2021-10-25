new Vue({
  el : '#section',
  data : {
        nnm : '',
        ncn : 0,
        npr : 0,
      itms : []
  },
  methods : {
      add () {
          this.itms.push({nm: this.nnm, cn: this.ncn, pr: this.npr});
          this.nnm = '';
          this.ncn = 0;
          this.npr = 0;
      }
  },
  computed : {
    ttl () {
        vr = 0;
        for (i = 0; i < this.itms.length; i++) {
            vr += (this.itms[i].cn * this.itms[i].pr);
        }
        return vr;
    },
    stl (){
        return this.ttl*.84;
    },
    iv (){
        return this.ttl*.16;
    }
  }
 
});
