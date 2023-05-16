import LargeImage from "@/components/common/image/Large";
import SmallImage from "@/components/common/image/Small";
import Container from "@/components/wrappers/Container";
import RightProductSide from "./RightProductSide";

export default function Single() {
  return (
    <Container as="div">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 mt-5 md:mt-0 gap-8">
        <div className="md:col-span-2">
          <div className="flex gap-4">
            <div className="hidden md:flex flex-col gap-3">
              {Array(4)
                .fill(0)
                .map((_, i) => {
                  return (
                    <SmallImage
                      key={i}
                      title="fake.png"
                      imageUrl="/assets/fake.png"
                    />
                  );
                })}
            </div>
            <LargeImage title="fake.png" imageUrl="/assets/fake.png" />
          </div>
        </div>
        <RightProductSide />
      </div>
    </Container>
  );
}
