Template.itemResources.helpers({
  resources: function() {
    if(this.resources) return this.resources.sort(compareDesc);

    function compareDesc(a,b) {
      if (a.submitted > b.submitted)
         return -1;
      if (a.submitted < b.submitted)
        return 1;
      return 0;
    }

  }
});
