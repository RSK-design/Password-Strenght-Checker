*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:'Segoe UI',sans-serif;
}

body{
    min-height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;

    background:linear-gradient(
        135deg,
        #667eea,
        #764ba2,
        #6b73ff
    );

    background-size:300% 300%;
    animation:bgMove 8s infinite alternate;
}

@keyframes bgMove{
    from{
        background-position:left;
    }
    to{
        background-position:right;
    }
}

.container{
    width:450px;
    padding:30px;

    backdrop-filter:blur(15px);
    background:rgba(255,255,255,0.15);

    border:1px solid rgba(255,255,255,0.2);
    border-radius:20px;

    color:white;

    box-shadow:
    0 8px 32px rgba(0,0,0,0.3);
}

h1{
    text-align:center;
    margin-bottom:25px;
}

.input-box{
    position:relative;
}

input{
    width:100%;
    padding:15px;
    border:none;
    border-radius:12px;
    outline:none;
    font-size:16px;
}

#toggleBtn{
    position:absolute;
    right:10px;
    top:50%;
    transform:translateY(-50%);
    border:none;
    background:none;
    cursor:pointer;
    font-size:18px;
}

.strength-container{
    width:100%;
    height:15px;
    background:rgba(255,255,255,0.2);
    border-radius:20px;
    margin-top:20px;
    overflow:hidden;
}

#strength-fill{
    height:100%;
    width:0%;
    border-radius:20px;
    transition:0.4s;
}

#strength-text,
#score{
    margin-top:12px;
    font-weight:bold;
}

.requirements{
    margin-top:20px;
    list-style:none;
}

.requirements li{
    margin:8px 0;
}

.valid{
    color:#00ff95;
}

#tips{
    margin-top:20px;
    padding:12px;
    border-radius:10px;
    background:rgba(255,255,255,0.1);
}
