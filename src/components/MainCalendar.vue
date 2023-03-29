<script setup lang="ts">
import Cell from './Cell.vue'
</script>

<template>
  <div role="presentation" class="month">
    <div role="row" class="weekday">
      <Cell>Пн</Cell>
      <Cell>Вт</Cell>
      <Cell>Ср</Cell>
      <Cell>Чт</Cell>
      <Cell>Пт</Cell>
      <Cell>Сб</Cell>
      <Cell>Вс</Cell>
    </div>
    <div role="grid" class="wrapper">
      <div role="row" class="row">
        <Cell is-neighbour>27</Cell>
        <Cell is-neighbour>28</Cell>
        <Cell>1</Cell>
        <Cell>2</Cell>
        <Cell>3</Cell>
        <Cell>4</Cell>
        <Cell>5</Cell>
      </div>
      <div role="row" class="row">
        <Cell>6</Cell>
        <Cell>7</Cell>
        <Cell>8</Cell>
        <Cell>9</Cell>
        <Cell>10</Cell>
        <Cell>11</Cell>
        <Cell>12</Cell>
      </div>
      <div role="row" class="row">
        <Cell>13</Cell>
        <Cell>14</Cell>
        <Cell>15</Cell>
        <Cell>16</Cell>
        <Cell>17</Cell>
        <Cell>18</Cell>
        <Cell>19</Cell>
      </div>
      <div role="row" class="row">
        <Cell>20</Cell>
        <Cell>21</Cell>
        <Cell>22</Cell>
        <Cell>23</Cell>
        <Cell>24</Cell>
        <Cell>25</Cell>
        <Cell>26</Cell>
      </div>
      <div role="row" class="row">
        <Cell>27</Cell>
        <Cell>28</Cell>
        <Cell>29</Cell>
        <Cell>30</Cell>
        <Cell>31</Cell>
        <Cell is-neighbour>1</Cell>
        <Cell is-neighbour>2</Cell>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  height: calc(100vh - var(--header-height) - var(--weekday-height));
}

.weekday {
  display: flex;
  height: var(--weekday-height);
  color: #747474;
}

.row {
  display: flex;
  flex: 1 1 auto;
  width: 100%;
  border-top: 1px solid var(--hairline);
}

.weekday > *,
.row > * {
  display: flex;
  width: calc(100% / 7);
  border-right: 1px solid var(--hairline);
  padding-left: 5px;
}
</style>
