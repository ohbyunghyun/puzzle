var container = document.querySelector('#cells');
        let num = 16;

        createcell();

        function createcell() {
            for (let a = 1; a <= num; a++) {
                var newcell = document.createElement('div');
                newcell.id = `div${a}`;
                newcell.setAttribute('index', a);
                newcell.innerHTML = a;
                newcell.classList.add('div');   
                newcell.addEventListener('click', function() {
                    change(parseInt(this.getAttribute('index')));
                    console.log(this.getAttribute('index'));
                });
                container.append(newcell);
            }
            selectedCellId = 'div' + num;
            selectedCell = document.getElementById(selectedCellId);
            selectedCell.classList.add("selected");
        }

        function change(clicked) {
            if (clicked < 1 || clicked > 16) {
                return;
            }

            if (clicked == num + 1) {
                if (clicked % 4 != 1) {
                    select(clicked);
                }
            } else if (clicked == num - 1) {
                if (clicked % 4 != 0) {
                    select(clicked);
                }
            } else if (clicked == num + 4) {
                select(clicked);
            } else if (clicked == num - 4) {
                select(clicked);
            }
        }

        function select(index) {
            oldCell = document.getElementById(`div${num}`);
            oldCellText = oldCell.innerHTML;
            oldCell.classList.remove('selected');
            newCell = document.getElementById(`div${index}`);
            oldCell.innerHTML = newCell.innerHTML;
            newCell.innerHTML = oldCellText;
            newCell.classList.add("selected");
            num = index;
        }