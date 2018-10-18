<template>
  <div class="liveBoard_item">
    <div class="item1">min</div>
    <div class="item2">teams</div>
    <div class="item3">score</div>
    <div class="item4">ligue</div>
    <div class="item5">win1</div>
    <div class="item6">draw</div>
    <div class="item7">win2</div>
  </div>
</template>

<script>
export default {
  name: 'LiveBoardItem'
}

</script>
<style scoped>
  .liveBoard_item{
    border: 2px dotted black;
    display: grid;
    grid-template-columns: 10% 30% 10% 20% 10% 10% 10%;

  }
  .liveBoard_item div{
    border: 1px solid orange;
  }
</style>
