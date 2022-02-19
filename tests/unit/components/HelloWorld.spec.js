import { shallowMount } from "@vue/test-utils";
import Component from "@/components/HelloWorld.vue";

describe("HelloWorld", () => {
  it("should render correct contents", () => {
    const wrapper = shallowMount(Component);
    expect(wrapper.find("h2").text()).toContain("Bienvenido a mi My Super App");
    expect(wrapper).toBeTruthy();
  });
});
