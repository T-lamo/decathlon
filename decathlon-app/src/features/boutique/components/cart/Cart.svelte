<script lang="ts">

</script>

<div class="container card">
    <div class="image"></div>
    <div class="info">
        <h4>Lorem ipsum </h4>
        <h4>Lorem ipsum </h4>
    </div>
</div>

<style lang="scss">
    .container {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        width: 100%;
        
        .image {
            background-image: url("https://images.unsplash.com/photo-1603884574615-7b6ec4198a8c?ixid=MnwxMDkyNjJ8MHwxfHNlYXJjaHwzNDF8fG1vdmllfGVufDB8fHx8MTY2ODY0MjgyMQ&ixlib=rb-4.0.3&w=500&h=1000");
            background-size: cover;
            background-position: center;
            width: 60px;
            height: 100%;
            display: flex;
            align-self: center;
        }
        .info {
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            align-self: center;
        }
    }
    
</style>