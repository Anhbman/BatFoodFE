<template>
  <div>
    <b-card
      :title="food.name"
      :img-src="'http://localhost:8080/image/' + food.image"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
    >
      <b-card-text>
        {{food.price }} đ
      </b-card-text>

      <b-button href="#" variant="primary">Chi tiết</b-button>
    </b-card>
</div>

</template>
<script>
export default {
  props: [
    'food'
  ]
}
</script>