const Personi = {
        emri = document.getElementById('emri).value;
            mbiemri = document.getElementById('mbiemri').value; email = document.getElementById('email').value; mosha = document.getElementById('mosha').value;

        }

        var vargu = [Person.emri, Personi.mbiemri, Personi.email, Personi.mosha];
        for (let i = 0; i < vargu.length; i++) {
            console.Log(vargu[i]);
        }

        for (let i = 0; i < 5; i++) {
            console.Log(Personi.emri + Personi.mbiemri + Personi.email + Personi.mosha);
        }

        if (Personi.mosha >= 18) {
            console.log(Personi.mosha);
        }

        for (let i = 0; i < vargu.length; i++) {
            var qyteti = Personi.qyteti
            if (!vargu.contains(qyteti)) {
                console.Log(Personi.qyteti);
            }
        }