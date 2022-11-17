

<script lang="ts"></script>

<div class="header">
    <h2 class="logo">
        <i class="fa-solid fa-crown"></i>
        <a class="logo-txt" href="#test"> Decathlon</a>
    </h2>
    <ul>
        <li>
            <a href="#offer">Nos offres</a>
        </li>
        <li> <a href="#team">Notre équipe</a>
        </li>
        <li><a href="#contact">Contact</a></li>
    </ul>

</div>

<style lang="scss" scoped>


.header {
  position: sticky;
  display: flex;
  background: #333;
  justify-content: space-between;
  flex: auto;
  top:0px;
  border-bottom: 1px solid #666;
}


.header ul {
  display: flex;
  flex-flow: row nowrap;
  
}
.header ul li {
  padding: 1rem 0.4rem;
}

.header ul li a:hover {
  color: #f1c40f;
}

.logo {
  font-size: 1.8rem;
  margin-bottom: 0;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
}

.logo > i {
  font-size: 1rem;
  color: #f1c40f;
  padding-right: 0.4rem;
}
.logo > a {
  font-size: 1.5rem;
  color: white;
  font-family: "Liu Jian Mao Cao", cursive;
}

.header a {
  color: white;
}
</style>