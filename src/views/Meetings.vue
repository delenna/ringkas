<template>
  <div>

    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
      <!-- Card stats -->
      <b-row>
        <b-card
          title="Card Title"
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
        >
          <b-card-text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </b-card-text>
          <b-card-text>
            Keyword
          </b-card-text>

          <b-button href="javascript:;" variant="primary">Detail</b-button>
        </b-card>
        <b-card class="mb-2" body-class="d-flex justify-content-center align-items-center" style="min-width: 20rem;max-height: 100%">
          <router-link :to="'/meeting/create'">
          <div class="d-flex flex-column justify-content-center align-items-center">
              <i class="fas fa-plus"></i>
              <p>Create New</p>
            </div>
          </router-link>
        </b-card>
      </b-row>
    </base-header>

  </div>
</template>
<script>

  export default {
    components: {
    },
    data() {
      return {
      };
    },
    methods: {
    },
    mounted() {
      this.initBigChart(0);
    }
  };
</script>
<style>
.el-table .cell{
  padding-left: 0px;
  padding-right: 0px;
}
</style>
