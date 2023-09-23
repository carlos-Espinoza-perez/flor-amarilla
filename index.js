const listPosition = [
    // {
    //     left: "50%",
    //     zIndex: 1,
    //     scale: 1,
    // },
];

const template = document.createElement("div");
template.innerHTML = `<div class="flower_wrapper">
                <div class="flower_stem"></div>
                <div class="flower_center"></div>
                <div class="flower_petal flower_petal-1"></div>
                <div class="flower_petal flower_petal-2"></div>
                <div class="flower_petal flower_petal-3"></div>
                <div class="flower_petal flower_petal-4"></div>
                <div class="flower_petal flower_petal-5"></div>
                <div class="flower_petal flower_petal-6"></div>
                <div class="flower_petal flower_petal-7"></div>
                <div class="flower_petal flower_petal-8"></div>
                <div class="flower_petal flower_petal-9"></div>
                <div class="flower_petal flower_petal-10"></div>
                <div class="flower_petal flower_petal-11"></div>
                <div class="flower_petal flower_petal-12"></div>

                <div class="flower_leaf flower_leaf-1"></div>
                <div class="flower_leaf flower_leaf-2"></div>

                <div class="flower_light flower_light-1"></div>
                <div class="flower_light flower_light-2"></div>
                <div class="flower_light flower_light-3"></div>
                <div class="flower_light flower_light-4"></div>
                <div class="flower_light flower_light-5"></div>
                <div class="flower_light flower_light-6"></div>
                <div class="flower_light flower_light-7"></div>
                <div class="flower_light flower_light-8"></div>
            </div>`;

for (const item of listPosition) {
    const newChild = template.cloneNode(true);
    const flower = newChild.querySelector(".flower_wrapper");

    flower.style.left = item.left;
    flower.style.zIndex = item.zIndex;
    flower.style.scale = item.scale;

    document.querySelector(".sunflower").append(newChild);
}
