import { useParams } from "react-router";
import SiteForm from "./newSiteForms/Form";
import Steper from "./newSiteForms/steper";
import PersonForm from "./newSiteForms/personForm";
import MetaForm from "./newSiteForms/metaForm";

const NewSite = () => {
  const { step } = useParams();
  const currentStep = Number(step) || 1; // Default to step 1 if invalid

  return (
    <div className="flex flex-col items-center gap-6">
      {currentStep === 1 && (
        <>
          {" "}
          <Steper step={1} />
          <SiteForm />
        </>
      )}
      {currentStep === 2 && (
        <>
          {" "}
          <Steper step={2} />
          <PersonForm />
        </>
      )}
      {currentStep === 3 && (
        <>
          {" "}
          <Steper step={3} />
          <MetaForm />
        </>
      )}
    </div>
  );
};

export default NewSite;
