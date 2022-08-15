<template>
  <div class="wiki">
    <h1 class="subheading grey--text view__title">wiki</h1>
    <div>
      <div>projects</div>
      <img
        src="https://user-images.githubusercontent.com/15625235/63575386-3e20b380-c58a-11e9-8f28-e196fd7e97a7.png"
        alt="puk"
      />

            <img
        src="https://ru.vuejs.org/images/lifecycle.png"
        alt="puk"
      />
    </div>

    <ul>
      <div>ЧО ботать</div>
      <li v-for="item in items4" :key="item">
        {{ item.description }}
      </li>
    </ul>

    <ul>
      <div>Виды дирректив во Vue.js</div>
      <li v-for="item in items" :key="item">
        {{ item.code }} - {{ item.title }} - {{ item.description }}
      </li>
    </ul>

    <div class="table__container">
      <table border="1">
        <thead>
          <th>имя</th>
          <th>что это</th>
          <th>Зачем это</th>
          <th>Как это</th>
        </thead>
        <tbody>
          <tr v-for="item in items2" :key="item">
            <td>{{ item.name }}</td>
            <td>{{ item.title }}</td>
            <td>{{ item.description }}</td>
            <td>{{ item.how }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="subheading grey--text">vuex</div>
    <div class="table__container">
      <table border="1">
        <thead>
          <th>имя</th>
          <th>что это</th>
          <th>Зачем это</th>
        </thead>
        <tbody>
          <tr v-for="item in items3" :key="item">
            <td>{{ item.code }}</td>
            <td>{{ item.title }}</td>
            <td>{{ item.description }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2>Пользовательские события</h2>

    <div>
      полная запись
      text-document
        v-bind:title="doc.title"
        v-on:update:title="doc.title = $event"
      text-document
      >
    </div>

    <div>
      сокращенная запись
      text-document 
      v-bind:title.sync="doc.title"
      /text-document>
    </div>

<p>https://www.devaradise.com/vue-example-projects</p>
    <p>
      Table of Contents	
How To Learn Vue.js Example Projects / Case Studies?
1. Choose Only One Project at A Time
2. Replicates, But Don’t Copy-Paste the Codes
3. Be Curious, Find out Why the Codes Work
4. Experiment, and Add Your Own Flavour
5. Have Patience and Stay Focused
What are the Vue.js Example Projects to Learn From?
1. Todo App with Composition API
2. Vue Todo App
3. Vue Calculator
4. Vue User Registration and Login
5. Vue By Sample
6. Vue Hackernews
7. Vue Stock Trader
8. Vue Trello
9. Vue Chat
10. Vue Gmail Clone
11. Vue Google Keep Clone
12. Vue Slack Clone
13. Vue Quasar Admin
14. Vue Admin Template
15. Vue Netflix Clone
16. Vue Reddit Clone
17. Vue RealWorld Example
18. Vue Online Music Player
19. Vue Hackernews 2.0
20. Vue Node.js Youtube Clone
21. Jira Clone
Do you know other repos?
    </p>
  </div>
</template>

<script>
const BOTAT = [
  {
    description:
      "Структура однофайлового компонента Vue.js что зчем дата компутед воч кеттеры сеттеры",
  },
  { description: "встроенные компоненты" },
  { description: "vuex" },
  { description: "vuetify актуальный синтаксис" },
  { description: "список типичный ворнингов" },
  { description: "???" },
  { description: "profit!!11" },
];

const HELPERS = [
  { code: "mapState", title: "вспомогательная функция", description: "-" },
  {
    code: "mapGetters",
    title: "вспомогательная функция",
    description:
      "Функция mapGetters просто проксирует геттеры хранилища в локальные вычисляемые свойства компонента",
  },
  {
    code: "mapMutations",
    title: "вспомогательная функция",
    description:
      "Мутации можно вызывать из кода компонентов, используя this.$store.commit('xxx'), или применяя вспомогательный метод mapMutations, который проксирует вызовы store.commit через методы компонентов (для этого требуется наличие корневой ссылки на хранилище $store)",
  },
  {
    code: "mapActions",
    title:
      "создающая локальные псевдонимы для действий в виде методов компонента",
    description:
      "проксирует `this.increment()` в `this.$store.dispatch('increment')`",
  },
];

const BASE_THINGS = [
  {
    name: "state",
    title: "Состояние",
    description: "куда уж без него",
    how: "",
  },
  {
    name: "getters",
    title: "Просто гетеры",
    description: "Действия которые возвращают данные из хранилища",
    how: "",
  },
  {
    name: "mutations",
    title: "Синхронные изменения состояния",
    description: "Синхронные транзакции",
    how: 'this.$store.commit("increment")',
  },
  {
    name: "actions",
    title: "Действия — похожи на мутации с несколькими отличиями",
    description:
      "Вместо того, чтобы напрямую менять состояние, действия инициируют мутации. Действия могут использоваться для асинхронных операций.",
    how: 'this.$store.dispatch("increment")',
  },
  {
    name: "modules",
    title: "ну модули там...",
    description: "не дочитал еще",
    how: "",
  },
];

const DIRECTIVES = [
  {
    code: "v-once",
    title: "Однократная привязка",
    description:
      "если необходимо, чтобы значение было привязано к элементу html только один раз и впоследствии не изменялось",
  },
  {
    code: "v-html",
    title: "Привязка к html",
    description: "Для привязки элемента к коду html",
  },
  {
    code: "v-on",
    title: "Обработка событий",
    description: "Для обработки событий элементов html в Vue.js",
  },
  {
    code: "v-model",
    title: "Двусторонняя привязка",
    description: "Для создания  двусторонней привязки",
  },
  {
    code: "v-if",
    title: "Условный рендеринг",
    description: "Позволяет отобразить или скрыть элемент html по условию",
  },
  {
    code: "v-show",
    title: "Условный рендеринг",
    description:
      "аналогично v-if позволяет скрывать или отображать элементы по определенному условию",
  },
  {
    code: "v-for",
    title: "Цикл for",
    description: "Для рендеринга коллекций",
  },
];

export default {
  name: "Wiki",
  data() {
    return {
      items: DIRECTIVES,
      items2: BASE_THINGS,
      items3: HELPERS,
      items4: BOTAT,
    };
  },
};
</script>

<style>
.table__container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
}
</style>