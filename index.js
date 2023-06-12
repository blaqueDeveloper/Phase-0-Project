let links = document.getElementsByClassName('success')
        let contents = document.getElementsByClassName('achievements-detailed')

        function clicked(name){
            for(link of links){
                link.classList.remove("current-link")
            }

            for(content of contents){
                content.classList.remove("active")
            }

            event.currentTarget.classList.add("current-link")
            document.getElementById(name).classList.add('active')
        }