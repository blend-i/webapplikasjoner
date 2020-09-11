**Sette opp git lokalt**

git init

**Sette opp nytt repo i Github**

- Gjøres via github.com

**Lage dev branch lokalt**

git branch test-branch

git checkout test-branch

**Lage fil i dev branch lokalt**

touch fil-i-test-branch.txt

git add fil-i-test-branch.txt

**Commite disse**

git commit -m "comment"

**Pushe endringene til repo**

git push -u origin test-branch

**Lage en fil i dev branch remote**

Brukte "Create new file" i github

**Hente endringene lokalt**

git fetch

git pull 

**Merge filene fra test-branch i master**

git checkout master

git merge test-branch

**Samarbeide med en kollega eller en annen konto du har for å få til merge conflict**
**Resolve merge conflict**
**(frivillig prøve ut stash, pop og cherry-pick):**

Gjorde endring i fila textfile.txt i test-branch og en annen ending i fila testfile.txt i master ved bruk av vim.
Tok git add, git commit og git push på begge.

(fra master)
git merge test-branch 

Da jeg prøvde å merge disse ble det conflict. (screenshot er lagt ved)

git diff testfile.txt (får opp differansen i commandline)

trykka på filen i visual studio. fikk opp differansen her også. Trykket "accept current change" Konflikten er resolved. 

git add .

git commit - m "melding"

git push

