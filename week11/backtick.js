<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        let a=1;
        function fn() {
            let b=2;
            console.log(a+b);
            function fn2(){
                let c=3;
                console.log(a+b+c);
                function fn3(){
                    let d=4;
                    console.log(a+b+c+d);
                }
                fn3();
            }
            fn2();
        }
        fn();
    </script>
</body>
</html>
