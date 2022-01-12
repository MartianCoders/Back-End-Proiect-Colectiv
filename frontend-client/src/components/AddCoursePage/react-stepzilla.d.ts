// my-wizard-component-dir/react-stepzilla.d.ts
declare module 'react-stepzilla' {
    import { Component } from 'react';
  
    export interface IStep {
        name: string;
        component: JSX.Element;
    }
  
    export interface IStepZillaProps {
        steps: IStep[];
        showSteps?: boolean;
        showNavigation?: boolean;
        stepsNavigation?: boolean;
        prevBtnOnLastStep?: boolean;
        dontValidate?: boolean;
        preventEnterSubmission?: boolean;
        startAtStep?: number;
        nextButtonText?: string;
        nextTextOnFinalActionStep?: string;
        nextButtonCls?: string;
        backButtonCls?: string;
        backButtonText?: string;
        hocValidationAppliedTo?: number[],
        onStepChange?: (step: number) => void;
    }
  
    // eslint-disable-next-line react/prefer-stateless-function
    export default class StepZilla extends Component<IStepZillaProps, {}> {}
  }