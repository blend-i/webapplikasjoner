# Read Me - Oblig 6

**Følg disse instruksjonene for å kjøre filen - dersom det er noe som er uklart eller ikke virker, kontakt meg på blendim@hiof.no**

## Du trenger:
1. MongoDB og MongoDB Compass som kommer med MongoDB. Lastes ned som vist i Marius sin forelesningsvideo eller ved å google "MongoDB Download" + operativsystemet ditt.

## Fremgangsmåte:
1. Åpne prosjektet i Visual Studio Code.
2. Bruk to terminaler, en hvor du setter directory til å være client-mappen, og en til å være server-mappen.
3. Kjør "yarn" i begge terminalene så alle dependencies blir installert.
4. Kjør "yarn dev" i begge mappene så prosjektet kjører.
5. I MongoDB Compass:
    * koble deg på Hostname: localhost og Port: 27017. Refresh Compass og se at hiof-databasen har kommet opp. 
6. Gå til "localhost:3000" i nettleseren.

Om alt over har gått fint, skal du nå kunne bruke nettsiden til å opprette en bruker og lage undersøkelser. Lager du undersøkelser før en bruker vil disse være laget av "Anonynomous", mens hvis du oppretter en bruker vil den sist opprettede brukeren stå som creator av en undersøkelse. Antall stemmer for hver undersøkelse finnes under "Results". De opprettede brukere og undersøkelser vil nå finnes under "users" og "polls" i MongoDB Compass ved en refresh.

## Testing

For å kjøre testen av React komponent NoMatch, skriv "yarn test" i terminalen som har directory satt til client-mappen.
