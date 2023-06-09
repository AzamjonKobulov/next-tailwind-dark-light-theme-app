import Button from '../Button';

const Hero = () => {
  return (
    <section className="mt-16">
      <h1 className="text-7xl font-bold">
        Hi Im <span className="dark:text-purple-600">Cand</span>
      </h1>
      <h3 className="text-4xl my-3">I am Web Designer</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-8">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid labore
        saepe iusto cupiditate earum vero possimus, expedita fugit ab corporis.
      </p>
      <Button className="bg-purple-600 text-white px-6">Hire Me!</Button>
    </section>
  );
};

export default Hero;
