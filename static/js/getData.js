function getData() {
    return fetch(
      "https://padax.github.io/taipei-day-trip-resources/taipei-attractions-assignment.json"
    ).then((response) => response.json());
  }