
export default [
  {
    "title": "Exàmens Finals",
    "description": "Recull d'exàmens finals d'anys anteriors.",
    "readTime": "Properament",
    "order": 13,
    "content": "# Contingut pendent\n\nAquest apartat encara s'ha de redactar. Tota ajuda és benvinguda!\nSi vols contribuir, pots editar aquest fitxer.",
    "_meta": {
      "filePath": "examens-finals.md",
      "fileName": "examens-finals.md",
      "directory": ".",
      "extension": "md",
      "path": "examens-finals"
    },
    "slug": "examens-finals"
  },
  {
    "title": "Parcial PRO2",
    "description": "Parcial PRO2",
    "readTime": "Properament",
    "order": 7,
    "content": "# Contingut pendent\n\nAquest tema encara s'ha de redactar. Tota ajuda és benvinguda!\nSi vols contribuir, pots editar aquest fitxer.",
    "_meta": {
      "filePath": "parcial-pro2.md",
      "fileName": "parcial-pro2.md",
      "directory": ".",
      "extension": "md",
      "path": "parcial-pro2"
    },
    "slug": "parcial-pro2"
  },
  {
    "title": "Tema 1: Programació Orientada a Objectes",
    "description": "Fonaments de classes, disseny modular i gestió de memòria.",
    "readTime": "3 min",
    "order": 1,
    "content": "## 1.1 Repàs: Structs i Pas de Paràmetres\n\nUna **struct** és un tipus de dades definit per l'usuari que permet agrupar diverses variables.\n\n```cpp\nstruct Estudiant {\n    int dni;\n    string nom;\n    double nota;\n};\n```\n\n### Pas de paràmetres\n\n- **Pas per valor**: Es fa una còpia. És lent i si modifiques no afecta l'original.\n- **Pas per referència (&)**: No es copia (ràpid). Si modifiques, canvies l'original.\n- **Lectura (const &)**: `void mostrar(const Estudiant& e);` (Ràpid i segur).\n- **Escriptura (&)**: `void actualitzar(Estudiant& e);` (Permet modificar).\n\n## 1.2 Disseny Modular i Classes\n\nEl **disseny modular** consisteix a descompondre un programa en peces independents (mòduls). Això millora l'organització i la reutilització.\n\n- **Especificació (.hpp)**: Declaracions de funcions, classes i tipus (el *què*).\n- **Implementació (.cpp)**: El codi de les funcions (el *com*).\n\nUna **Classe** és com una struct, però amb una diferència clau: la visibilitat per defecte. En POO, protegim les dades.\n\n- **Private**: Els atributs. SEMPRE privats. Ningú de fora els pot tocar directament.\n- **Public**: Els mètodes. És l'única manera d'interactuar amb els objectes.\n\n### Comparació: Struct vs Class\n\n:::div{.grid .grid-cols-1 .md:grid-cols-2 .gap-4}\n\n```cpp\n// Punt.hpp (Especificació)\nclass Punt {\nprivate:\n    double x, y;    // Atributs (Privats)\n\npublic:\n    // Constructors\n    Punt();\n    Punt(double a, double b);\n\n    // Modificadors\n    void moure(double dx, double dy);\n\n    // Consultors (const!)\n    double get_x() const;\n    double get_y() const;\n    double distancia() const;\n};\n```\n\n```cpp\n// Punt.cpp (Implementació)\n#include \"Punt.hpp\"\n#include <cmath>\n\nPunt::Punt() {\n    x = 0; y = 0;\n}\n\nPunt::Punt(double a, double b) {\n    x = a; y = b;\n}\n\nvoid Punt::moure(double dx, double dy) {\n    x += dx; y += dy;\n}\n\ndouble Punt::get_x() const {\n    return x;\n}\n\ndouble Punt::distancia() const {\n    return sqrt(x*x + y*y);\n}\n```\n\n:::",
    "_meta": {
      "filePath": "tema-1.md",
      "fileName": "tema-1.md",
      "directory": ".",
      "extension": "md",
      "path": "tema-1"
    },
    "slug": "tema-1"
  },
  {
    "title": "Tema 10: Grafs",
    "description": "Introducció als grafs i els seus algorismes bàsics.",
    "readTime": "Properament",
    "order": 11,
    "content": "# Contingut pendent\n\nAquest tema encara s'ha de redactar. Tota ajuda és benvinguda!\nSi vols contribuir, pots editar aquest fitxer.",
    "_meta": {
      "filePath": "tema-10.md",
      "fileName": "tema-10.md",
      "directory": ".",
      "extension": "md",
      "path": "tema-10"
    },
    "slug": "tema-10"
  },
  {
    "title": "Tema 11: Disseny d'Algorismes",
    "description": "Estratègies avançades: Divide & Conquer, Greedy...",
    "readTime": "Properament",
    "order": 12,
    "content": "# Contingut pendent\n\nAquest tema encara s'ha de redactar. Tota ajuda és benvinguda!\nSi vols contribuir, pots editar aquest fitxer.",
    "_meta": {
      "filePath": "tema-11.md",
      "fileName": "tema-11.md",
      "directory": ".",
      "extension": "md",
      "path": "tema-11"
    },
    "slug": "tema-11"
  },
  {
    "title": "Tema 2: Punter i Gestió de Memòria",
    "description": "Introducció a l'ús de punters i la seva gestió en C++.",
    "readTime": "Properament",
    "order": 2,
    "content": "# Contingut pendent\n\nAquest tema encara s'ha de redactar. Tota ajuda és benvinguda!\nSi vols contribuir, pots editar aquest fitxer.",
    "_meta": {
      "filePath": "tema-2.md",
      "fileName": "tema-2.md",
      "directory": ".",
      "extension": "md",
      "path": "tema-2"
    },
    "slug": "tema-2"
  },
  {
    "title": "Tema 3: Recursivitat",
    "description": "Conceptes bàsics i avançats de recursivitat.",
    "readTime": "Properament",
    "order": 3,
    "content": "# Contingut pendent\n\nAquest tema encara s'ha de redactar. Tota ajuda és benvinguda!\nSi vols contribuir, pots editar aquest fitxer.",
    "_meta": {
      "filePath": "tema-3.md",
      "fileName": "tema-3.md",
      "directory": ".",
      "extension": "md",
      "path": "tema-3"
    },
    "slug": "tema-3"
  },
  {
    "title": "Tema 4: Estructures de Dades Lineals",
    "description": "Piles, cues i llistes enllaçades.",
    "readTime": "Properament",
    "order": 4,
    "content": "# Contingut pendent\n\nAquest tema encara s'ha de redactar. Tota ajuda és benvinguda!\nSi vols contribuir, pots editar aquest fitxer.",
    "_meta": {
      "filePath": "tema-4.md",
      "fileName": "tema-4.md",
      "directory": ".",
      "extension": "md",
      "path": "tema-4"
    },
    "slug": "tema-4"
  },
  {
    "title": "Tema 5: Arbres Generals",
    "description": "Estructures arborescents no lineals.",
    "readTime": "Properament",
    "order": 5,
    "content": "# Contingut pendent\n\nAquest tema encara s'ha de redactar. Tota ajuda és benvinguda!\nSi vols contribuir, pots editar aquest fitxer.",
    "_meta": {
      "filePath": "tema-5.md",
      "fileName": "tema-5.md",
      "directory": ".",
      "extension": "md",
      "path": "tema-5"
    },
    "slug": "tema-5"
  },
  {
    "title": "Tema 6: Arbres Binaris",
    "description": "Propietats i recorreguts d'arbres binaris.",
    "readTime": "Properament",
    "order": 6,
    "content": "# Contingut pendent\n\nAquest tema encara s'ha de redactar. Tota ajuda és benvinguda!\nSi vols contribuir, pots editar aquest fitxer.",
    "_meta": {
      "filePath": "tema-6.md",
      "fileName": "tema-6.md",
      "directory": ".",
      "extension": "md",
      "path": "tema-6"
    },
    "slug": "tema-6"
  },
  {
    "title": "Tema 7: Cues de Prioritat i Heaps",
    "description": "Implementació i ús de cues de prioritat.",
    "readTime": "Properament",
    "order": 8,
    "content": "# Contingut pendent\n\nAquest tema encara s'ha de redactar. Tota ajuda és benvinguda!\nSi vols contribuir, pots editar aquest fitxer.",
    "_meta": {
      "filePath": "tema-7.md",
      "fileName": "tema-7.md",
      "directory": ".",
      "extension": "md",
      "path": "tema-7"
    },
    "slug": "tema-7"
  },
  {
    "title": "Tema 8: Diccionaris i ABB",
    "description": "Arbres Binaris de Cerca i la seva aplicació en diccionaris.",
    "readTime": "Properament",
    "order": 9,
    "content": "# Contingut pendent\n\nAquest tema encara s'ha de redactar. Tota ajuda és benvinguda!\nSi vols contribuir, pots editar aquest fitxer.",
    "_meta": {
      "filePath": "tema-8.md",
      "fileName": "tema-8.md",
      "directory": ".",
      "extension": "md",
      "path": "tema-8"
    },
    "slug": "tema-8"
  },
  {
    "title": "Tema 9: Cerca i Ordenació",
    "description": "Algorismes fonamentals de cerca i ordenació.",
    "readTime": "Properament",
    "order": 10,
    "content": "# Contingut pendent\n\nAquest tema encara s'ha de redactar. Tota ajuda és benvinguda!\nSi vols contribuir, pots editar aquest fitxer.",
    "_meta": {
      "filePath": "tema-9.md",
      "fileName": "tema-9.md",
      "directory": ".",
      "extension": "md",
      "path": "tema-9"
    },
    "slug": "tema-9"
  }
]