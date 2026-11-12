/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface GenieAgentConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#definition GenieAgent#definition}
  */
  readonly definition: GenieAgentDefinition;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#description GenieAgent#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#display_name GenieAgent#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#genie_agent_id GenieAgent#genie_agent_id}
  */
  readonly genieAgentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#parent_path GenieAgent#parent_path}
  */
  readonly parentPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#provider_config GenieAgent#provider_config}
  */
  readonly providerConfig?: GenieAgentProviderConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#warehouse_id GenieAgent#warehouse_id}
  */
  readonly warehouseId: string;
}
export interface GenieAgentDefinitionBenchmarksQuestionsAnswer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#content GenieAgent#content}
  */
  readonly content: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#format GenieAgent#format}
  */
  readonly format: string;
}

export function genieAgentDefinitionBenchmarksQuestionsAnswerToTerraform(struct?: GenieAgentDefinitionBenchmarksQuestionsAnswer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content: cdktn.stringToTerraform(struct!.content),
    format: cdktn.stringToTerraform(struct!.format),
  }
}


export function genieAgentDefinitionBenchmarksQuestionsAnswerToHclTerraform(struct?: GenieAgentDefinitionBenchmarksQuestionsAnswer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content: {
      value: cdktn.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    format: {
      value: cdktn.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GenieAgentDefinitionBenchmarksQuestionsAnswer | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenieAgentDefinitionBenchmarksQuestionsAnswer | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._content = undefined;
      this._format = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._content = value.content;
      this._format = value.format;
    }
  }

  // content - computed: false, optional: false, required: true
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // format - computed: false, optional: false, required: true
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }
}

export class GenieAgentDefinitionBenchmarksQuestionsAnswerList extends cdktn.ComplexList {
  public internalValue? : GenieAgentDefinitionBenchmarksQuestionsAnswer[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference {
    return new GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GenieAgentDefinitionBenchmarksQuestions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#answer GenieAgent#answer}
  */
  readonly answer?: GenieAgentDefinitionBenchmarksQuestionsAnswer[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#evaluation_note GenieAgent#evaluation_note}
  */
  readonly evaluationNote?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#id GenieAgent#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#question GenieAgent#question}
  */
  readonly question: string;
}

export function genieAgentDefinitionBenchmarksQuestionsToTerraform(struct?: GenieAgentDefinitionBenchmarksQuestions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    answer: cdktn.listMapper(genieAgentDefinitionBenchmarksQuestionsAnswerToTerraform, false)(struct!.answer),
    evaluation_note: cdktn.stringToTerraform(struct!.evaluationNote),
    id: cdktn.stringToTerraform(struct!.id),
    question: cdktn.stringToTerraform(struct!.question),
  }
}


export function genieAgentDefinitionBenchmarksQuestionsToHclTerraform(struct?: GenieAgentDefinitionBenchmarksQuestions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    answer: {
      value: cdktn.listMapperHcl(genieAgentDefinitionBenchmarksQuestionsAnswerToHclTerraform, false)(struct!.answer),
      isBlock: true,
      type: "list",
      storageClassType: "GenieAgentDefinitionBenchmarksQuestionsAnswerList",
    },
    evaluation_note: {
      value: cdktn.stringToHclTerraform(struct!.evaluationNote),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    question: {
      value: cdktn.stringToHclTerraform(struct!.question),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GenieAgentDefinitionBenchmarksQuestionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GenieAgentDefinitionBenchmarksQuestions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._answer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.answer = this._answer?.internalValue;
    }
    if (this._evaluationNote !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluationNote = this._evaluationNote;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._question !== undefined) {
      hasAnyValues = true;
      internalValueResult.question = this._question;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenieAgentDefinitionBenchmarksQuestions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._answer.internalValue = undefined;
      this._evaluationNote = undefined;
      this._id = undefined;
      this._question = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._answer.internalValue = value.answer;
      this._evaluationNote = value.evaluationNote;
      this._id = value.id;
      this._question = value.question;
    }
  }

  // answer - computed: false, optional: true, required: false
  private _answer = new GenieAgentDefinitionBenchmarksQuestionsAnswerList(this, "answer", false);
  public get answer() {
    return this._answer;
  }
  public putAnswer(value: GenieAgentDefinitionBenchmarksQuestionsAnswer[] | cdktn.IResolvable) {
    this._answer.internalValue = value;
  }
  public resetAnswer() {
    this._answer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get answerInput() {
    return this._answer.internalValue;
  }

  // evaluation_note - computed: false, optional: true, required: false
  private _evaluationNote?: string; 
  public get evaluationNote() {
    return this.getStringAttribute('evaluation_note');
  }
  public set evaluationNote(value: string) {
    this._evaluationNote = value;
  }
  public resetEvaluationNote() {
    this._evaluationNote = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationNoteInput() {
    return this._evaluationNote;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // question - computed: false, optional: false, required: true
  private _question?: string; 
  public get question() {
    return this.getStringAttribute('question');
  }
  public set question(value: string) {
    this._question = value;
  }
  // Temporarily expose input value. Use with caution.
  public get questionInput() {
    return this._question;
  }
}

export class GenieAgentDefinitionBenchmarksQuestionsList extends cdktn.ComplexList {
  public internalValue? : GenieAgentDefinitionBenchmarksQuestions[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GenieAgentDefinitionBenchmarksQuestionsOutputReference {
    return new GenieAgentDefinitionBenchmarksQuestionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GenieAgentDefinitionBenchmarks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#questions GenieAgent#questions}
  */
  readonly questions?: GenieAgentDefinitionBenchmarksQuestions[] | cdktn.IResolvable;
}

export function genieAgentDefinitionBenchmarksToTerraform(struct?: GenieAgentDefinitionBenchmarks | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    questions: cdktn.listMapper(genieAgentDefinitionBenchmarksQuestionsToTerraform, false)(struct!.questions),
  }
}


export function genieAgentDefinitionBenchmarksToHclTerraform(struct?: GenieAgentDefinitionBenchmarks | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    questions: {
      value: cdktn.listMapperHcl(genieAgentDefinitionBenchmarksQuestionsToHclTerraform, false)(struct!.questions),
      isBlock: true,
      type: "list",
      storageClassType: "GenieAgentDefinitionBenchmarksQuestionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GenieAgentDefinitionBenchmarksOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GenieAgentDefinitionBenchmarks | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._questions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.questions = this._questions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenieAgentDefinitionBenchmarks | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._questions.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._questions.internalValue = value.questions;
    }
  }

  // questions - computed: false, optional: true, required: false
  private _questions = new GenieAgentDefinitionBenchmarksQuestionsList(this, "questions", false);
  public get questions() {
    return this._questions;
  }
  public putQuestions(value: GenieAgentDefinitionBenchmarksQuestions[] | cdktn.IResolvable) {
    this._questions.internalValue = value;
  }
  public resetQuestions() {
    this._questions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get questionsInput() {
    return this._questions.internalValue;
  }
}
export interface GenieAgentDefinitionConfigSampleQuestions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#id GenieAgent#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#question GenieAgent#question}
  */
  readonly question: string;
}

export function genieAgentDefinitionConfigSampleQuestionsToTerraform(struct?: GenieAgentDefinitionConfigSampleQuestions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    id: cdktn.stringToTerraform(struct!.id),
    question: cdktn.stringToTerraform(struct!.question),
  }
}


export function genieAgentDefinitionConfigSampleQuestionsToHclTerraform(struct?: GenieAgentDefinitionConfigSampleQuestions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    question: {
      value: cdktn.stringToHclTerraform(struct!.question),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GenieAgentDefinitionConfigSampleQuestionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GenieAgentDefinitionConfigSampleQuestions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._question !== undefined) {
      hasAnyValues = true;
      internalValueResult.question = this._question;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenieAgentDefinitionConfigSampleQuestions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._question = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._question = value.question;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // question - computed: false, optional: false, required: true
  private _question?: string; 
  public get question() {
    return this.getStringAttribute('question');
  }
  public set question(value: string) {
    this._question = value;
  }
  // Temporarily expose input value. Use with caution.
  public get questionInput() {
    return this._question;
  }
}

export class GenieAgentDefinitionConfigSampleQuestionsList extends cdktn.ComplexList {
  public internalValue? : GenieAgentDefinitionConfigSampleQuestions[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GenieAgentDefinitionConfigSampleQuestionsOutputReference {
    return new GenieAgentDefinitionConfigSampleQuestionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GenieAgentDefinitionConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#sample_questions GenieAgent#sample_questions}
  */
  readonly sampleQuestions?: GenieAgentDefinitionConfigSampleQuestions[] | cdktn.IResolvable;
}

export function genieAgentDefinitionConfigToTerraform(struct?: GenieAgentDefinitionConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    sample_questions: cdktn.listMapper(genieAgentDefinitionConfigSampleQuestionsToTerraform, false)(struct!.sampleQuestions),
  }
}


export function genieAgentDefinitionConfigToHclTerraform(struct?: GenieAgentDefinitionConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    sample_questions: {
      value: cdktn.listMapperHcl(genieAgentDefinitionConfigSampleQuestionsToHclTerraform, false)(struct!.sampleQuestions),
      isBlock: true,
      type: "list",
      storageClassType: "GenieAgentDefinitionConfigSampleQuestionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GenieAgentDefinitionConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GenieAgentDefinitionConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sampleQuestions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampleQuestions = this._sampleQuestions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenieAgentDefinitionConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sampleQuestions.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sampleQuestions.internalValue = value.sampleQuestions;
    }
  }

  // sample_questions - computed: false, optional: true, required: false
  private _sampleQuestions = new GenieAgentDefinitionConfigSampleQuestionsList(this, "sample_questions", false);
  public get sampleQuestions() {
    return this._sampleQuestions;
  }
  public putSampleQuestions(value: GenieAgentDefinitionConfigSampleQuestions[] | cdktn.IResolvable) {
    this._sampleQuestions.internalValue = value;
  }
  public resetSampleQuestions() {
    this._sampleQuestions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleQuestionsInput() {
    return this._sampleQuestions.internalValue;
  }
}
export interface GenieAgentDefinitionDataSourcesMcpConnections {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#mcp_connection GenieAgent#mcp_connection}
  */
  readonly mcpConnection: string;
}

export function genieAgentDefinitionDataSourcesMcpConnectionsToTerraform(struct?: GenieAgentDefinitionDataSourcesMcpConnections | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    mcp_connection: cdktn.stringToTerraform(struct!.mcpConnection),
  }
}


export function genieAgentDefinitionDataSourcesMcpConnectionsToHclTerraform(struct?: GenieAgentDefinitionDataSourcesMcpConnections | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    mcp_connection: {
      value: cdktn.stringToHclTerraform(struct!.mcpConnection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GenieAgentDefinitionDataSourcesMcpConnections | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mcpConnection !== undefined) {
      hasAnyValues = true;
      internalValueResult.mcpConnection = this._mcpConnection;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenieAgentDefinitionDataSourcesMcpConnections | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mcpConnection = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mcpConnection = value.mcpConnection;
    }
  }

  // mcp_connection - computed: false, optional: false, required: true
  private _mcpConnection?: string; 
  public get mcpConnection() {
    return this.getStringAttribute('mcp_connection');
  }
  public set mcpConnection(value: string) {
    this._mcpConnection = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mcpConnectionInput() {
    return this._mcpConnection;
  }
}

export class GenieAgentDefinitionDataSourcesMcpConnectionsList extends cdktn.ComplexList {
  public internalValue? : GenieAgentDefinitionDataSourcesMcpConnections[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference {
    return new GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GenieAgentDefinitionDataSourcesTablesColumnConfigs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#column GenieAgent#column}
  */
  readonly column: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#description GenieAgent#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#display_name GenieAgent#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#enable_entity_matching GenieAgent#enable_entity_matching}
  */
  readonly enableEntityMatching?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#enable_format_assistance GenieAgent#enable_format_assistance}
  */
  readonly enableFormatAssistance?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#exclude GenieAgent#exclude}
  */
  readonly exclude?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#synonyms GenieAgent#synonyms}
  */
  readonly synonyms?: string[];
}

export function genieAgentDefinitionDataSourcesTablesColumnConfigsToTerraform(struct?: GenieAgentDefinitionDataSourcesTablesColumnConfigs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    column: cdktn.stringToTerraform(struct!.column),
    description: cdktn.stringToTerraform(struct!.description),
    display_name: cdktn.stringToTerraform(struct!.displayName),
    enable_entity_matching: cdktn.booleanToTerraform(struct!.enableEntityMatching),
    enable_format_assistance: cdktn.booleanToTerraform(struct!.enableFormatAssistance),
    exclude: cdktn.booleanToTerraform(struct!.exclude),
    synonyms: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.synonyms),
  }
}


export function genieAgentDefinitionDataSourcesTablesColumnConfigsToHclTerraform(struct?: GenieAgentDefinitionDataSourcesTablesColumnConfigs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    column: {
      value: cdktn.stringToHclTerraform(struct!.column),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_name: {
      value: cdktn.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_entity_matching: {
      value: cdktn.booleanToHclTerraform(struct!.enableEntityMatching),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_format_assistance: {
      value: cdktn.booleanToHclTerraform(struct!.enableFormatAssistance),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    exclude: {
      value: cdktn.booleanToHclTerraform(struct!.exclude),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    synonyms: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.synonyms),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GenieAgentDefinitionDataSourcesTablesColumnConfigs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._column !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._enableEntityMatching !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableEntityMatching = this._enableEntityMatching;
    }
    if (this._enableFormatAssistance !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableFormatAssistance = this._enableFormatAssistance;
    }
    if (this._exclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclude = this._exclude;
    }
    if (this._synonyms !== undefined) {
      hasAnyValues = true;
      internalValueResult.synonyms = this._synonyms;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenieAgentDefinitionDataSourcesTablesColumnConfigs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._column = undefined;
      this._description = undefined;
      this._displayName = undefined;
      this._enableEntityMatching = undefined;
      this._enableFormatAssistance = undefined;
      this._exclude = undefined;
      this._synonyms = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._column = value.column;
      this._description = value.description;
      this._displayName = value.displayName;
      this._enableEntityMatching = value.enableEntityMatching;
      this._enableFormatAssistance = value.enableFormatAssistance;
      this._exclude = value.exclude;
      this._synonyms = value.synonyms;
    }
  }

  // column - computed: false, optional: false, required: true
  private _column?: string; 
  public get column() {
    return this.getStringAttribute('column');
  }
  public set column(value: string) {
    this._column = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // enable_entity_matching - computed: false, optional: true, required: false
  private _enableEntityMatching?: boolean | cdktn.IResolvable; 
  public get enableEntityMatching() {
    return this.getBooleanAttribute('enable_entity_matching');
  }
  public set enableEntityMatching(value: boolean | cdktn.IResolvable) {
    this._enableEntityMatching = value;
  }
  public resetEnableEntityMatching() {
    this._enableEntityMatching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableEntityMatchingInput() {
    return this._enableEntityMatching;
  }

  // enable_format_assistance - computed: false, optional: true, required: false
  private _enableFormatAssistance?: boolean | cdktn.IResolvable; 
  public get enableFormatAssistance() {
    return this.getBooleanAttribute('enable_format_assistance');
  }
  public set enableFormatAssistance(value: boolean | cdktn.IResolvable) {
    this._enableFormatAssistance = value;
  }
  public resetEnableFormatAssistance() {
    this._enableFormatAssistance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableFormatAssistanceInput() {
    return this._enableFormatAssistance;
  }

  // exclude - computed: false, optional: true, required: false
  private _exclude?: boolean | cdktn.IResolvable; 
  public get exclude() {
    return this.getBooleanAttribute('exclude');
  }
  public set exclude(value: boolean | cdktn.IResolvable) {
    this._exclude = value;
  }
  public resetExclude() {
    this._exclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude;
  }

  // synonyms - computed: false, optional: true, required: false
  private _synonyms?: string[]; 
  public get synonyms() {
    return this.getListAttribute('synonyms');
  }
  public set synonyms(value: string[]) {
    this._synonyms = value;
  }
  public resetSynonyms() {
    this._synonyms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synonymsInput() {
    return this._synonyms;
  }
}

export class GenieAgentDefinitionDataSourcesTablesColumnConfigsList extends cdktn.ComplexList {
  public internalValue? : GenieAgentDefinitionDataSourcesTablesColumnConfigs[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference {
    return new GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GenieAgentDefinitionDataSourcesTables {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#column_configs GenieAgent#column_configs}
  */
  readonly columnConfigs?: GenieAgentDefinitionDataSourcesTablesColumnConfigs[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#description GenieAgent#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#identifier GenieAgent#identifier}
  */
  readonly identifier: string;
}

export function genieAgentDefinitionDataSourcesTablesToTerraform(struct?: GenieAgentDefinitionDataSourcesTables | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    column_configs: cdktn.listMapper(genieAgentDefinitionDataSourcesTablesColumnConfigsToTerraform, false)(struct!.columnConfigs),
    description: cdktn.stringToTerraform(struct!.description),
    identifier: cdktn.stringToTerraform(struct!.identifier),
  }
}


export function genieAgentDefinitionDataSourcesTablesToHclTerraform(struct?: GenieAgentDefinitionDataSourcesTables | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    column_configs: {
      value: cdktn.listMapperHcl(genieAgentDefinitionDataSourcesTablesColumnConfigsToHclTerraform, false)(struct!.columnConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "GenieAgentDefinitionDataSourcesTablesColumnConfigsList",
    },
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identifier: {
      value: cdktn.stringToHclTerraform(struct!.identifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GenieAgentDefinitionDataSourcesTablesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GenieAgentDefinitionDataSourcesTables | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columnConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnConfigs = this._columnConfigs?.internalValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._identifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.identifier = this._identifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenieAgentDefinitionDataSourcesTables | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._columnConfigs.internalValue = undefined;
      this._description = undefined;
      this._identifier = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._columnConfigs.internalValue = value.columnConfigs;
      this._description = value.description;
      this._identifier = value.identifier;
    }
  }

  // column_configs - computed: false, optional: true, required: false
  private _columnConfigs = new GenieAgentDefinitionDataSourcesTablesColumnConfigsList(this, "column_configs", false);
  public get columnConfigs() {
    return this._columnConfigs;
  }
  public putColumnConfigs(value: GenieAgentDefinitionDataSourcesTablesColumnConfigs[] | cdktn.IResolvable) {
    this._columnConfigs.internalValue = value;
  }
  public resetColumnConfigs() {
    this._columnConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnConfigsInput() {
    return this._columnConfigs.internalValue;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // identifier - computed: false, optional: false, required: true
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }
}

export class GenieAgentDefinitionDataSourcesTablesList extends cdktn.ComplexList {
  public internalValue? : GenieAgentDefinitionDataSourcesTables[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GenieAgentDefinitionDataSourcesTablesOutputReference {
    return new GenieAgentDefinitionDataSourcesTablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GenieAgentDefinitionDataSourcesVolumes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#description GenieAgent#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#path GenieAgent#path}
  */
  readonly path: string;
}

export function genieAgentDefinitionDataSourcesVolumesToTerraform(struct?: GenieAgentDefinitionDataSourcesVolumes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    path: cdktn.stringToTerraform(struct!.path),
  }
}


export function genieAgentDefinitionDataSourcesVolumesToHclTerraform(struct?: GenieAgentDefinitionDataSourcesVolumes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktn.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GenieAgentDefinitionDataSourcesVolumesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GenieAgentDefinitionDataSourcesVolumes | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenieAgentDefinitionDataSourcesVolumes | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._path = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._path = value.path;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}

export class GenieAgentDefinitionDataSourcesVolumesList extends cdktn.ComplexList {
  public internalValue? : GenieAgentDefinitionDataSourcesVolumes[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GenieAgentDefinitionDataSourcesVolumesOutputReference {
    return new GenieAgentDefinitionDataSourcesVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GenieAgentDefinitionDataSources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#mcp_connections GenieAgent#mcp_connections}
  */
  readonly mcpConnections?: GenieAgentDefinitionDataSourcesMcpConnections[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#tables GenieAgent#tables}
  */
  readonly tables?: GenieAgentDefinitionDataSourcesTables[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#volumes GenieAgent#volumes}
  */
  readonly volumes?: GenieAgentDefinitionDataSourcesVolumes[] | cdktn.IResolvable;
}

export function genieAgentDefinitionDataSourcesToTerraform(struct?: GenieAgentDefinitionDataSources | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    mcp_connections: cdktn.listMapper(genieAgentDefinitionDataSourcesMcpConnectionsToTerraform, false)(struct!.mcpConnections),
    tables: cdktn.listMapper(genieAgentDefinitionDataSourcesTablesToTerraform, false)(struct!.tables),
    volumes: cdktn.listMapper(genieAgentDefinitionDataSourcesVolumesToTerraform, false)(struct!.volumes),
  }
}


export function genieAgentDefinitionDataSourcesToHclTerraform(struct?: GenieAgentDefinitionDataSources | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    mcp_connections: {
      value: cdktn.listMapperHcl(genieAgentDefinitionDataSourcesMcpConnectionsToHclTerraform, false)(struct!.mcpConnections),
      isBlock: true,
      type: "list",
      storageClassType: "GenieAgentDefinitionDataSourcesMcpConnectionsList",
    },
    tables: {
      value: cdktn.listMapperHcl(genieAgentDefinitionDataSourcesTablesToHclTerraform, false)(struct!.tables),
      isBlock: true,
      type: "list",
      storageClassType: "GenieAgentDefinitionDataSourcesTablesList",
    },
    volumes: {
      value: cdktn.listMapperHcl(genieAgentDefinitionDataSourcesVolumesToHclTerraform, false)(struct!.volumes),
      isBlock: true,
      type: "list",
      storageClassType: "GenieAgentDefinitionDataSourcesVolumesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GenieAgentDefinitionDataSourcesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GenieAgentDefinitionDataSources | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mcpConnections?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mcpConnections = this._mcpConnections?.internalValue;
    }
    if (this._tables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tables = this._tables?.internalValue;
    }
    if (this._volumes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumes = this._volumes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenieAgentDefinitionDataSources | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mcpConnections.internalValue = undefined;
      this._tables.internalValue = undefined;
      this._volumes.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mcpConnections.internalValue = value.mcpConnections;
      this._tables.internalValue = value.tables;
      this._volumes.internalValue = value.volumes;
    }
  }

  // mcp_connections - computed: false, optional: true, required: false
  private _mcpConnections = new GenieAgentDefinitionDataSourcesMcpConnectionsList(this, "mcp_connections", false);
  public get mcpConnections() {
    return this._mcpConnections;
  }
  public putMcpConnections(value: GenieAgentDefinitionDataSourcesMcpConnections[] | cdktn.IResolvable) {
    this._mcpConnections.internalValue = value;
  }
  public resetMcpConnections() {
    this._mcpConnections.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mcpConnectionsInput() {
    return this._mcpConnections.internalValue;
  }

  // tables - computed: false, optional: true, required: false
  private _tables = new GenieAgentDefinitionDataSourcesTablesList(this, "tables", false);
  public get tables() {
    return this._tables;
  }
  public putTables(value: GenieAgentDefinitionDataSourcesTables[] | cdktn.IResolvable) {
    this._tables.internalValue = value;
  }
  public resetTables() {
    this._tables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tablesInput() {
    return this._tables.internalValue;
  }

  // volumes - computed: false, optional: true, required: false
  private _volumes = new GenieAgentDefinitionDataSourcesVolumesList(this, "volumes", false);
  public get volumes() {
    return this._volumes;
  }
  public putVolumes(value: GenieAgentDefinitionDataSourcesVolumes[] | cdktn.IResolvable) {
    this._volumes.internalValue = value;
  }
  public resetVolumes() {
    this._volumes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumesInput() {
    return this._volumes.internalValue;
  }
}
export interface GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#max GenieAgent#max}
  */
  readonly max?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#min GenieAgent#min}
  */
  readonly min?: string;
}

export function genieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeToTerraform(struct?: GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max: cdktn.stringToTerraform(struct!.max),
    min: cdktn.stringToTerraform(struct!.min),
  }
}


export function genieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeToHclTerraform(struct?: GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max: {
      value: cdktn.stringToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min: {
      value: cdktn.stringToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._max = undefined;
      this._min = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._max = value.max;
      this._min = value.min;
    }
  }

  // max - computed: false, optional: true, required: false
  private _max?: string; 
  public get max() {
    return this.getStringAttribute('max');
  }
  public set max(value: string) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: true, required: false
  private _min?: string; 
  public get min() {
    return this.getStringAttribute('min');
  }
  public set min(value: string) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }
}
export interface GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#value_range GenieAgent#value_range}
  */
  readonly valueRange?: GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#values GenieAgent#values}
  */
  readonly values?: string[];
}

export function genieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueToTerraform(struct?: GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value_range: genieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeToTerraform(struct!.valueRange),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function genieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueToHclTerraform(struct?: GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    value_range: {
      value: genieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeToHclTerraform(struct!.valueRange),
      isBlock: true,
      type: "struct",
      storageClassType: "GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._valueRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueRange = this._valueRange?.internalValue;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._valueRange.internalValue = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._valueRange.internalValue = value.valueRange;
      this._values = value.values;
    }
  }

  // value_range - computed: false, optional: true, required: false
  private _valueRange = new GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference(this, "value_range");
  public get valueRange() {
    return this._valueRange;
  }
  public putValueRange(value: GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange) {
    this._valueRange.internalValue = value;
  }
  public resetValueRange() {
    this._valueRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueRangeInput() {
    return this._valueRange.internalValue;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#default_value GenieAgent#default_value}
  */
  readonly defaultValue?: GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#description GenieAgent#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#name GenieAgent#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#type_hint GenieAgent#type_hint}
  */
  readonly typeHint?: string;
}

export function genieAgentDefinitionInstructionsExampleQuestionSqlsParametersToTerraform(struct?: GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    default_value: genieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueToTerraform(struct!.defaultValue),
    description: cdktn.stringToTerraform(struct!.description),
    name: cdktn.stringToTerraform(struct!.name),
    type_hint: cdktn.stringToTerraform(struct!.typeHint),
  }
}


export function genieAgentDefinitionInstructionsExampleQuestionSqlsParametersToHclTerraform(struct?: GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    default_value: {
      value: genieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueToHclTerraform(struct!.defaultValue),
      isBlock: true,
      type: "struct",
      storageClassType: "GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue",
    },
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type_hint: {
      value: cdktn.stringToHclTerraform(struct!.typeHint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue?.internalValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._typeHint !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeHint = this._typeHint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultValue.internalValue = undefined;
      this._description = undefined;
      this._name = undefined;
      this._typeHint = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultValue.internalValue = value.defaultValue;
      this._description = value.description;
      this._name = value.name;
      this._typeHint = value.typeHint;
    }
  }

  // default_value - computed: false, optional: true, required: false
  private _defaultValue = new GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference(this, "default_value");
  public get defaultValue() {
    return this._defaultValue;
  }
  public putDefaultValue(value: GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue) {
    this._defaultValue.internalValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue.internalValue;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // type_hint - computed: false, optional: true, required: false
  private _typeHint?: string; 
  public get typeHint() {
    return this.getStringAttribute('type_hint');
  }
  public set typeHint(value: string) {
    this._typeHint = value;
  }
  public resetTypeHint() {
    this._typeHint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeHintInput() {
    return this._typeHint;
  }
}

export class GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList extends cdktn.ComplexList {
  public internalValue? : GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference {
    return new GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GenieAgentDefinitionInstructionsExampleQuestionSqls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#id GenieAgent#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#parameters GenieAgent#parameters}
  */
  readonly parameters?: GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#question GenieAgent#question}
  */
  readonly question: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#sql GenieAgent#sql}
  */
  readonly sql: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#usage_guidance GenieAgent#usage_guidance}
  */
  readonly usageGuidance?: string;
}

export function genieAgentDefinitionInstructionsExampleQuestionSqlsToTerraform(struct?: GenieAgentDefinitionInstructionsExampleQuestionSqls | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    id: cdktn.stringToTerraform(struct!.id),
    parameters: cdktn.listMapper(genieAgentDefinitionInstructionsExampleQuestionSqlsParametersToTerraform, false)(struct!.parameters),
    question: cdktn.stringToTerraform(struct!.question),
    sql: cdktn.stringToTerraform(struct!.sql),
    usage_guidance: cdktn.stringToTerraform(struct!.usageGuidance),
  }
}


export function genieAgentDefinitionInstructionsExampleQuestionSqlsToHclTerraform(struct?: GenieAgentDefinitionInstructionsExampleQuestionSqls | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters: {
      value: cdktn.listMapperHcl(genieAgentDefinitionInstructionsExampleQuestionSqlsParametersToHclTerraform, false)(struct!.parameters),
      isBlock: true,
      type: "list",
      storageClassType: "GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList",
    },
    question: {
      value: cdktn.stringToHclTerraform(struct!.question),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sql: {
      value: cdktn.stringToHclTerraform(struct!.sql),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    usage_guidance: {
      value: cdktn.stringToHclTerraform(struct!.usageGuidance),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GenieAgentDefinitionInstructionsExampleQuestionSqls | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    if (this._question !== undefined) {
      hasAnyValues = true;
      internalValueResult.question = this._question;
    }
    if (this._sql !== undefined) {
      hasAnyValues = true;
      internalValueResult.sql = this._sql;
    }
    if (this._usageGuidance !== undefined) {
      hasAnyValues = true;
      internalValueResult.usageGuidance = this._usageGuidance;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenieAgentDefinitionInstructionsExampleQuestionSqls | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._parameters.internalValue = undefined;
      this._question = undefined;
      this._sql = undefined;
      this._usageGuidance = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._parameters.internalValue = value.parameters;
      this._question = value.question;
      this._sql = value.sql;
      this._usageGuidance = value.usageGuidance;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters[] | cdktn.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // question - computed: false, optional: false, required: true
  private _question?: string; 
  public get question() {
    return this.getStringAttribute('question');
  }
  public set question(value: string) {
    this._question = value;
  }
  // Temporarily expose input value. Use with caution.
  public get questionInput() {
    return this._question;
  }

  // sql - computed: false, optional: false, required: true
  private _sql?: string; 
  public get sql() {
    return this.getStringAttribute('sql');
  }
  public set sql(value: string) {
    this._sql = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlInput() {
    return this._sql;
  }

  // usage_guidance - computed: false, optional: true, required: false
  private _usageGuidance?: string; 
  public get usageGuidance() {
    return this.getStringAttribute('usage_guidance');
  }
  public set usageGuidance(value: string) {
    this._usageGuidance = value;
  }
  public resetUsageGuidance() {
    this._usageGuidance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usageGuidanceInput() {
    return this._usageGuidance;
  }
}

export class GenieAgentDefinitionInstructionsExampleQuestionSqlsList extends cdktn.ComplexList {
  public internalValue? : GenieAgentDefinitionInstructionsExampleQuestionSqls[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference {
    return new GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GenieAgentDefinitionInstructionsJoinSpecsLeft {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#alias GenieAgent#alias}
  */
  readonly alias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#identifier GenieAgent#identifier}
  */
  readonly identifier: string;
}

export function genieAgentDefinitionInstructionsJoinSpecsLeftToTerraform(struct?: GenieAgentDefinitionInstructionsJoinSpecsLeft | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    alias: cdktn.stringToTerraform(struct!.alias),
    identifier: cdktn.stringToTerraform(struct!.identifier),
  }
}


export function genieAgentDefinitionInstructionsJoinSpecsLeftToHclTerraform(struct?: GenieAgentDefinitionInstructionsJoinSpecsLeft | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    alias: {
      value: cdktn.stringToHclTerraform(struct!.alias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identifier: {
      value: cdktn.stringToHclTerraform(struct!.identifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GenieAgentDefinitionInstructionsJoinSpecsLeft | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alias !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias;
    }
    if (this._identifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.identifier = this._identifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenieAgentDefinitionInstructionsJoinSpecsLeft | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alias = undefined;
      this._identifier = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alias = value.alias;
      this._identifier = value.identifier;
    }
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // identifier - computed: false, optional: false, required: true
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }
}
export interface GenieAgentDefinitionInstructionsJoinSpecsRight {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#alias GenieAgent#alias}
  */
  readonly alias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#identifier GenieAgent#identifier}
  */
  readonly identifier: string;
}

export function genieAgentDefinitionInstructionsJoinSpecsRightToTerraform(struct?: GenieAgentDefinitionInstructionsJoinSpecsRight | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    alias: cdktn.stringToTerraform(struct!.alias),
    identifier: cdktn.stringToTerraform(struct!.identifier),
  }
}


export function genieAgentDefinitionInstructionsJoinSpecsRightToHclTerraform(struct?: GenieAgentDefinitionInstructionsJoinSpecsRight | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    alias: {
      value: cdktn.stringToHclTerraform(struct!.alias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identifier: {
      value: cdktn.stringToHclTerraform(struct!.identifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GenieAgentDefinitionInstructionsJoinSpecsRight | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alias !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias;
    }
    if (this._identifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.identifier = this._identifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenieAgentDefinitionInstructionsJoinSpecsRight | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alias = undefined;
      this._identifier = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alias = value.alias;
      this._identifier = value.identifier;
    }
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // identifier - computed: false, optional: false, required: true
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }
}
export interface GenieAgentDefinitionInstructionsJoinSpecs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#comment GenieAgent#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#id GenieAgent#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#instruction GenieAgent#instruction}
  */
  readonly instruction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#left GenieAgent#left}
  */
  readonly left: GenieAgentDefinitionInstructionsJoinSpecsLeft;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#relationship_type GenieAgent#relationship_type}
  */
  readonly relationshipType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#right GenieAgent#right}
  */
  readonly right: GenieAgentDefinitionInstructionsJoinSpecsRight;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#sql GenieAgent#sql}
  */
  readonly sql: string;
}

export function genieAgentDefinitionInstructionsJoinSpecsToTerraform(struct?: GenieAgentDefinitionInstructionsJoinSpecs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comment: cdktn.stringToTerraform(struct!.comment),
    id: cdktn.stringToTerraform(struct!.id),
    instruction: cdktn.stringToTerraform(struct!.instruction),
    left: genieAgentDefinitionInstructionsJoinSpecsLeftToTerraform(struct!.left),
    relationship_type: cdktn.stringToTerraform(struct!.relationshipType),
    right: genieAgentDefinitionInstructionsJoinSpecsRightToTerraform(struct!.right),
    sql: cdktn.stringToTerraform(struct!.sql),
  }
}


export function genieAgentDefinitionInstructionsJoinSpecsToHclTerraform(struct?: GenieAgentDefinitionInstructionsJoinSpecs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comment: {
      value: cdktn.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instruction: {
      value: cdktn.stringToHclTerraform(struct!.instruction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    left: {
      value: genieAgentDefinitionInstructionsJoinSpecsLeftToHclTerraform(struct!.left),
      isBlock: true,
      type: "struct",
      storageClassType: "GenieAgentDefinitionInstructionsJoinSpecsLeft",
    },
    relationship_type: {
      value: cdktn.stringToHclTerraform(struct!.relationshipType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    right: {
      value: genieAgentDefinitionInstructionsJoinSpecsRightToHclTerraform(struct!.right),
      isBlock: true,
      type: "struct",
      storageClassType: "GenieAgentDefinitionInstructionsJoinSpecsRight",
    },
    sql: {
      value: cdktn.stringToHclTerraform(struct!.sql),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GenieAgentDefinitionInstructionsJoinSpecsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GenieAgentDefinitionInstructionsJoinSpecs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._instruction !== undefined) {
      hasAnyValues = true;
      internalValueResult.instruction = this._instruction;
    }
    if (this._left?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.left = this._left?.internalValue;
    }
    if (this._relationshipType !== undefined) {
      hasAnyValues = true;
      internalValueResult.relationshipType = this._relationshipType;
    }
    if (this._right?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.right = this._right?.internalValue;
    }
    if (this._sql !== undefined) {
      hasAnyValues = true;
      internalValueResult.sql = this._sql;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenieAgentDefinitionInstructionsJoinSpecs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comment = undefined;
      this._id = undefined;
      this._instruction = undefined;
      this._left.internalValue = undefined;
      this._relationshipType = undefined;
      this._right.internalValue = undefined;
      this._sql = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comment = value.comment;
      this._id = value.id;
      this._instruction = value.instruction;
      this._left.internalValue = value.left;
      this._relationshipType = value.relationshipType;
      this._right.internalValue = value.right;
      this._sql = value.sql;
    }
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // instruction - computed: false, optional: true, required: false
  private _instruction?: string; 
  public get instruction() {
    return this.getStringAttribute('instruction');
  }
  public set instruction(value: string) {
    this._instruction = value;
  }
  public resetInstruction() {
    this._instruction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instructionInput() {
    return this._instruction;
  }

  // left - computed: false, optional: false, required: true
  private _left = new GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference(this, "left");
  public get left() {
    return this._left;
  }
  public putLeft(value: GenieAgentDefinitionInstructionsJoinSpecsLeft) {
    this._left.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get leftInput() {
    return this._left.internalValue;
  }

  // relationship_type - computed: false, optional: true, required: false
  private _relationshipType?: string; 
  public get relationshipType() {
    return this.getStringAttribute('relationship_type');
  }
  public set relationshipType(value: string) {
    this._relationshipType = value;
  }
  public resetRelationshipType() {
    this._relationshipType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationshipTypeInput() {
    return this._relationshipType;
  }

  // right - computed: false, optional: false, required: true
  private _right = new GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference(this, "right");
  public get right() {
    return this._right;
  }
  public putRight(value: GenieAgentDefinitionInstructionsJoinSpecsRight) {
    this._right.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rightInput() {
    return this._right.internalValue;
  }

  // sql - computed: false, optional: false, required: true
  private _sql?: string; 
  public get sql() {
    return this.getStringAttribute('sql');
  }
  public set sql(value: string) {
    this._sql = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlInput() {
    return this._sql;
  }
}

export class GenieAgentDefinitionInstructionsJoinSpecsList extends cdktn.ComplexList {
  public internalValue? : GenieAgentDefinitionInstructionsJoinSpecs[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GenieAgentDefinitionInstructionsJoinSpecsOutputReference {
    return new GenieAgentDefinitionInstructionsJoinSpecsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GenieAgentDefinitionInstructionsSqlFunctions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#id GenieAgent#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#identifier GenieAgent#identifier}
  */
  readonly identifier: string;
}

export function genieAgentDefinitionInstructionsSqlFunctionsToTerraform(struct?: GenieAgentDefinitionInstructionsSqlFunctions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    id: cdktn.stringToTerraform(struct!.id),
    identifier: cdktn.stringToTerraform(struct!.identifier),
  }
}


export function genieAgentDefinitionInstructionsSqlFunctionsToHclTerraform(struct?: GenieAgentDefinitionInstructionsSqlFunctions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identifier: {
      value: cdktn.stringToHclTerraform(struct!.identifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GenieAgentDefinitionInstructionsSqlFunctionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GenieAgentDefinitionInstructionsSqlFunctions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._identifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.identifier = this._identifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenieAgentDefinitionInstructionsSqlFunctions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._identifier = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._identifier = value.identifier;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // identifier - computed: false, optional: false, required: true
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }
}

export class GenieAgentDefinitionInstructionsSqlFunctionsList extends cdktn.ComplexList {
  public internalValue? : GenieAgentDefinitionInstructionsSqlFunctions[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GenieAgentDefinitionInstructionsSqlFunctionsOutputReference {
    return new GenieAgentDefinitionInstructionsSqlFunctionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GenieAgentDefinitionInstructionsSqlSnippetsExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#alias GenieAgent#alias}
  */
  readonly alias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#display_name GenieAgent#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#id GenieAgent#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#instruction GenieAgent#instruction}
  */
  readonly instruction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#sql GenieAgent#sql}
  */
  readonly sql: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#synonyms GenieAgent#synonyms}
  */
  readonly synonyms?: string[];
}

export function genieAgentDefinitionInstructionsSqlSnippetsExpressionsToTerraform(struct?: GenieAgentDefinitionInstructionsSqlSnippetsExpressions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    alias: cdktn.stringToTerraform(struct!.alias),
    display_name: cdktn.stringToTerraform(struct!.displayName),
    id: cdktn.stringToTerraform(struct!.id),
    instruction: cdktn.stringToTerraform(struct!.instruction),
    sql: cdktn.stringToTerraform(struct!.sql),
    synonyms: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.synonyms),
  }
}


export function genieAgentDefinitionInstructionsSqlSnippetsExpressionsToHclTerraform(struct?: GenieAgentDefinitionInstructionsSqlSnippetsExpressions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    alias: {
      value: cdktn.stringToHclTerraform(struct!.alias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_name: {
      value: cdktn.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instruction: {
      value: cdktn.stringToHclTerraform(struct!.instruction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sql: {
      value: cdktn.stringToHclTerraform(struct!.sql),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    synonyms: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.synonyms),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GenieAgentDefinitionInstructionsSqlSnippetsExpressions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alias !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._instruction !== undefined) {
      hasAnyValues = true;
      internalValueResult.instruction = this._instruction;
    }
    if (this._sql !== undefined) {
      hasAnyValues = true;
      internalValueResult.sql = this._sql;
    }
    if (this._synonyms !== undefined) {
      hasAnyValues = true;
      internalValueResult.synonyms = this._synonyms;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenieAgentDefinitionInstructionsSqlSnippetsExpressions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alias = undefined;
      this._displayName = undefined;
      this._id = undefined;
      this._instruction = undefined;
      this._sql = undefined;
      this._synonyms = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alias = value.alias;
      this._displayName = value.displayName;
      this._id = value.id;
      this._instruction = value.instruction;
      this._sql = value.sql;
      this._synonyms = value.synonyms;
    }
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // instruction - computed: false, optional: true, required: false
  private _instruction?: string; 
  public get instruction() {
    return this.getStringAttribute('instruction');
  }
  public set instruction(value: string) {
    this._instruction = value;
  }
  public resetInstruction() {
    this._instruction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instructionInput() {
    return this._instruction;
  }

  // sql - computed: false, optional: false, required: true
  private _sql?: string; 
  public get sql() {
    return this.getStringAttribute('sql');
  }
  public set sql(value: string) {
    this._sql = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlInput() {
    return this._sql;
  }

  // synonyms - computed: false, optional: true, required: false
  private _synonyms?: string[]; 
  public get synonyms() {
    return this.getListAttribute('synonyms');
  }
  public set synonyms(value: string[]) {
    this._synonyms = value;
  }
  public resetSynonyms() {
    this._synonyms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synonymsInput() {
    return this._synonyms;
  }
}

export class GenieAgentDefinitionInstructionsSqlSnippetsExpressionsList extends cdktn.ComplexList {
  public internalValue? : GenieAgentDefinitionInstructionsSqlSnippetsExpressions[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference {
    return new GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GenieAgentDefinitionInstructionsSqlSnippetsFilters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#display_name GenieAgent#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#id GenieAgent#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#instruction GenieAgent#instruction}
  */
  readonly instruction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#sql GenieAgent#sql}
  */
  readonly sql: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#synonyms GenieAgent#synonyms}
  */
  readonly synonyms?: string[];
}

export function genieAgentDefinitionInstructionsSqlSnippetsFiltersToTerraform(struct?: GenieAgentDefinitionInstructionsSqlSnippetsFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    display_name: cdktn.stringToTerraform(struct!.displayName),
    id: cdktn.stringToTerraform(struct!.id),
    instruction: cdktn.stringToTerraform(struct!.instruction),
    sql: cdktn.stringToTerraform(struct!.sql),
    synonyms: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.synonyms),
  }
}


export function genieAgentDefinitionInstructionsSqlSnippetsFiltersToHclTerraform(struct?: GenieAgentDefinitionInstructionsSqlSnippetsFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    display_name: {
      value: cdktn.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instruction: {
      value: cdktn.stringToHclTerraform(struct!.instruction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sql: {
      value: cdktn.stringToHclTerraform(struct!.sql),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    synonyms: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.synonyms),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GenieAgentDefinitionInstructionsSqlSnippetsFilters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._instruction !== undefined) {
      hasAnyValues = true;
      internalValueResult.instruction = this._instruction;
    }
    if (this._sql !== undefined) {
      hasAnyValues = true;
      internalValueResult.sql = this._sql;
    }
    if (this._synonyms !== undefined) {
      hasAnyValues = true;
      internalValueResult.synonyms = this._synonyms;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenieAgentDefinitionInstructionsSqlSnippetsFilters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._displayName = undefined;
      this._id = undefined;
      this._instruction = undefined;
      this._sql = undefined;
      this._synonyms = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._displayName = value.displayName;
      this._id = value.id;
      this._instruction = value.instruction;
      this._sql = value.sql;
      this._synonyms = value.synonyms;
    }
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // instruction - computed: false, optional: true, required: false
  private _instruction?: string; 
  public get instruction() {
    return this.getStringAttribute('instruction');
  }
  public set instruction(value: string) {
    this._instruction = value;
  }
  public resetInstruction() {
    this._instruction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instructionInput() {
    return this._instruction;
  }

  // sql - computed: false, optional: false, required: true
  private _sql?: string; 
  public get sql() {
    return this.getStringAttribute('sql');
  }
  public set sql(value: string) {
    this._sql = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlInput() {
    return this._sql;
  }

  // synonyms - computed: false, optional: true, required: false
  private _synonyms?: string[]; 
  public get synonyms() {
    return this.getListAttribute('synonyms');
  }
  public set synonyms(value: string[]) {
    this._synonyms = value;
  }
  public resetSynonyms() {
    this._synonyms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synonymsInput() {
    return this._synonyms;
  }
}

export class GenieAgentDefinitionInstructionsSqlSnippetsFiltersList extends cdktn.ComplexList {
  public internalValue? : GenieAgentDefinitionInstructionsSqlSnippetsFilters[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference {
    return new GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GenieAgentDefinitionInstructionsSqlSnippetsMeasures {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#alias GenieAgent#alias}
  */
  readonly alias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#display_name GenieAgent#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#id GenieAgent#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#instruction GenieAgent#instruction}
  */
  readonly instruction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#sql GenieAgent#sql}
  */
  readonly sql: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#synonyms GenieAgent#synonyms}
  */
  readonly synonyms?: string[];
}

export function genieAgentDefinitionInstructionsSqlSnippetsMeasuresToTerraform(struct?: GenieAgentDefinitionInstructionsSqlSnippetsMeasures | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    alias: cdktn.stringToTerraform(struct!.alias),
    display_name: cdktn.stringToTerraform(struct!.displayName),
    id: cdktn.stringToTerraform(struct!.id),
    instruction: cdktn.stringToTerraform(struct!.instruction),
    sql: cdktn.stringToTerraform(struct!.sql),
    synonyms: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.synonyms),
  }
}


export function genieAgentDefinitionInstructionsSqlSnippetsMeasuresToHclTerraform(struct?: GenieAgentDefinitionInstructionsSqlSnippetsMeasures | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    alias: {
      value: cdktn.stringToHclTerraform(struct!.alias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_name: {
      value: cdktn.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instruction: {
      value: cdktn.stringToHclTerraform(struct!.instruction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sql: {
      value: cdktn.stringToHclTerraform(struct!.sql),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    synonyms: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.synonyms),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GenieAgentDefinitionInstructionsSqlSnippetsMeasures | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alias !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._instruction !== undefined) {
      hasAnyValues = true;
      internalValueResult.instruction = this._instruction;
    }
    if (this._sql !== undefined) {
      hasAnyValues = true;
      internalValueResult.sql = this._sql;
    }
    if (this._synonyms !== undefined) {
      hasAnyValues = true;
      internalValueResult.synonyms = this._synonyms;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenieAgentDefinitionInstructionsSqlSnippetsMeasures | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alias = undefined;
      this._displayName = undefined;
      this._id = undefined;
      this._instruction = undefined;
      this._sql = undefined;
      this._synonyms = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alias = value.alias;
      this._displayName = value.displayName;
      this._id = value.id;
      this._instruction = value.instruction;
      this._sql = value.sql;
      this._synonyms = value.synonyms;
    }
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // instruction - computed: false, optional: true, required: false
  private _instruction?: string; 
  public get instruction() {
    return this.getStringAttribute('instruction');
  }
  public set instruction(value: string) {
    this._instruction = value;
  }
  public resetInstruction() {
    this._instruction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instructionInput() {
    return this._instruction;
  }

  // sql - computed: false, optional: false, required: true
  private _sql?: string; 
  public get sql() {
    return this.getStringAttribute('sql');
  }
  public set sql(value: string) {
    this._sql = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlInput() {
    return this._sql;
  }

  // synonyms - computed: false, optional: true, required: false
  private _synonyms?: string[]; 
  public get synonyms() {
    return this.getListAttribute('synonyms');
  }
  public set synonyms(value: string[]) {
    this._synonyms = value;
  }
  public resetSynonyms() {
    this._synonyms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synonymsInput() {
    return this._synonyms;
  }
}

export class GenieAgentDefinitionInstructionsSqlSnippetsMeasuresList extends cdktn.ComplexList {
  public internalValue? : GenieAgentDefinitionInstructionsSqlSnippetsMeasures[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference {
    return new GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GenieAgentDefinitionInstructionsSqlSnippets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#expressions GenieAgent#expressions}
  */
  readonly expressions?: GenieAgentDefinitionInstructionsSqlSnippetsExpressions[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#filters GenieAgent#filters}
  */
  readonly filters?: GenieAgentDefinitionInstructionsSqlSnippetsFilters[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#measures GenieAgent#measures}
  */
  readonly measures?: GenieAgentDefinitionInstructionsSqlSnippetsMeasures[] | cdktn.IResolvable;
}

export function genieAgentDefinitionInstructionsSqlSnippetsToTerraform(struct?: GenieAgentDefinitionInstructionsSqlSnippets | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    expressions: cdktn.listMapper(genieAgentDefinitionInstructionsSqlSnippetsExpressionsToTerraform, false)(struct!.expressions),
    filters: cdktn.listMapper(genieAgentDefinitionInstructionsSqlSnippetsFiltersToTerraform, false)(struct!.filters),
    measures: cdktn.listMapper(genieAgentDefinitionInstructionsSqlSnippetsMeasuresToTerraform, false)(struct!.measures),
  }
}


export function genieAgentDefinitionInstructionsSqlSnippetsToHclTerraform(struct?: GenieAgentDefinitionInstructionsSqlSnippets | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    expressions: {
      value: cdktn.listMapperHcl(genieAgentDefinitionInstructionsSqlSnippetsExpressionsToHclTerraform, false)(struct!.expressions),
      isBlock: true,
      type: "list",
      storageClassType: "GenieAgentDefinitionInstructionsSqlSnippetsExpressionsList",
    },
    filters: {
      value: cdktn.listMapperHcl(genieAgentDefinitionInstructionsSqlSnippetsFiltersToHclTerraform, false)(struct!.filters),
      isBlock: true,
      type: "list",
      storageClassType: "GenieAgentDefinitionInstructionsSqlSnippetsFiltersList",
    },
    measures: {
      value: cdktn.listMapperHcl(genieAgentDefinitionInstructionsSqlSnippetsMeasuresToHclTerraform, false)(struct!.measures),
      isBlock: true,
      type: "list",
      storageClassType: "GenieAgentDefinitionInstructionsSqlSnippetsMeasuresList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GenieAgentDefinitionInstructionsSqlSnippetsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GenieAgentDefinitionInstructionsSqlSnippets | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.expressions = this._expressions?.internalValue;
    }
    if (this._filters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filters = this._filters?.internalValue;
    }
    if (this._measures?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.measures = this._measures?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenieAgentDefinitionInstructionsSqlSnippets | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expressions.internalValue = undefined;
      this._filters.internalValue = undefined;
      this._measures.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expressions.internalValue = value.expressions;
      this._filters.internalValue = value.filters;
      this._measures.internalValue = value.measures;
    }
  }

  // expressions - computed: false, optional: true, required: false
  private _expressions = new GenieAgentDefinitionInstructionsSqlSnippetsExpressionsList(this, "expressions", false);
  public get expressions() {
    return this._expressions;
  }
  public putExpressions(value: GenieAgentDefinitionInstructionsSqlSnippetsExpressions[] | cdktn.IResolvable) {
    this._expressions.internalValue = value;
  }
  public resetExpressions() {
    this._expressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionsInput() {
    return this._expressions.internalValue;
  }

  // filters - computed: false, optional: true, required: false
  private _filters = new GenieAgentDefinitionInstructionsSqlSnippetsFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: GenieAgentDefinitionInstructionsSqlSnippetsFilters[] | cdktn.IResolvable) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }

  // measures - computed: false, optional: true, required: false
  private _measures = new GenieAgentDefinitionInstructionsSqlSnippetsMeasuresList(this, "measures", false);
  public get measures() {
    return this._measures;
  }
  public putMeasures(value: GenieAgentDefinitionInstructionsSqlSnippetsMeasures[] | cdktn.IResolvable) {
    this._measures.internalValue = value;
  }
  public resetMeasures() {
    this._measures.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get measuresInput() {
    return this._measures.internalValue;
  }
}
export interface GenieAgentDefinitionInstructionsTextInstructions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#content GenieAgent#content}
  */
  readonly content: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#id GenieAgent#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function genieAgentDefinitionInstructionsTextInstructionsToTerraform(struct?: GenieAgentDefinitionInstructionsTextInstructions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content: cdktn.stringToTerraform(struct!.content),
    id: cdktn.stringToTerraform(struct!.id),
  }
}


export function genieAgentDefinitionInstructionsTextInstructionsToHclTerraform(struct?: GenieAgentDefinitionInstructionsTextInstructions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content: {
      value: cdktn.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GenieAgentDefinitionInstructionsTextInstructionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GenieAgentDefinitionInstructionsTextInstructions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenieAgentDefinitionInstructionsTextInstructions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._content = undefined;
      this._id = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._content = value.content;
      this._id = value.id;
    }
  }

  // content - computed: false, optional: false, required: true
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class GenieAgentDefinitionInstructionsTextInstructionsList extends cdktn.ComplexList {
  public internalValue? : GenieAgentDefinitionInstructionsTextInstructions[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GenieAgentDefinitionInstructionsTextInstructionsOutputReference {
    return new GenieAgentDefinitionInstructionsTextInstructionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GenieAgentDefinitionInstructions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#example_question_sqls GenieAgent#example_question_sqls}
  */
  readonly exampleQuestionSqls?: GenieAgentDefinitionInstructionsExampleQuestionSqls[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#join_specs GenieAgent#join_specs}
  */
  readonly joinSpecs?: GenieAgentDefinitionInstructionsJoinSpecs[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#sql_functions GenieAgent#sql_functions}
  */
  readonly sqlFunctions?: GenieAgentDefinitionInstructionsSqlFunctions[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#sql_snippets GenieAgent#sql_snippets}
  */
  readonly sqlSnippets?: GenieAgentDefinitionInstructionsSqlSnippets;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#text_instructions GenieAgent#text_instructions}
  */
  readonly textInstructions?: GenieAgentDefinitionInstructionsTextInstructions[] | cdktn.IResolvable;
}

export function genieAgentDefinitionInstructionsToTerraform(struct?: GenieAgentDefinitionInstructions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    example_question_sqls: cdktn.listMapper(genieAgentDefinitionInstructionsExampleQuestionSqlsToTerraform, false)(struct!.exampleQuestionSqls),
    join_specs: cdktn.listMapper(genieAgentDefinitionInstructionsJoinSpecsToTerraform, false)(struct!.joinSpecs),
    sql_functions: cdktn.listMapper(genieAgentDefinitionInstructionsSqlFunctionsToTerraform, false)(struct!.sqlFunctions),
    sql_snippets: genieAgentDefinitionInstructionsSqlSnippetsToTerraform(struct!.sqlSnippets),
    text_instructions: cdktn.listMapper(genieAgentDefinitionInstructionsTextInstructionsToTerraform, false)(struct!.textInstructions),
  }
}


export function genieAgentDefinitionInstructionsToHclTerraform(struct?: GenieAgentDefinitionInstructions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    example_question_sqls: {
      value: cdktn.listMapperHcl(genieAgentDefinitionInstructionsExampleQuestionSqlsToHclTerraform, false)(struct!.exampleQuestionSqls),
      isBlock: true,
      type: "list",
      storageClassType: "GenieAgentDefinitionInstructionsExampleQuestionSqlsList",
    },
    join_specs: {
      value: cdktn.listMapperHcl(genieAgentDefinitionInstructionsJoinSpecsToHclTerraform, false)(struct!.joinSpecs),
      isBlock: true,
      type: "list",
      storageClassType: "GenieAgentDefinitionInstructionsJoinSpecsList",
    },
    sql_functions: {
      value: cdktn.listMapperHcl(genieAgentDefinitionInstructionsSqlFunctionsToHclTerraform, false)(struct!.sqlFunctions),
      isBlock: true,
      type: "list",
      storageClassType: "GenieAgentDefinitionInstructionsSqlFunctionsList",
    },
    sql_snippets: {
      value: genieAgentDefinitionInstructionsSqlSnippetsToHclTerraform(struct!.sqlSnippets),
      isBlock: true,
      type: "struct",
      storageClassType: "GenieAgentDefinitionInstructionsSqlSnippets",
    },
    text_instructions: {
      value: cdktn.listMapperHcl(genieAgentDefinitionInstructionsTextInstructionsToHclTerraform, false)(struct!.textInstructions),
      isBlock: true,
      type: "list",
      storageClassType: "GenieAgentDefinitionInstructionsTextInstructionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GenieAgentDefinitionInstructionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GenieAgentDefinitionInstructions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exampleQuestionSqls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exampleQuestionSqls = this._exampleQuestionSqls?.internalValue;
    }
    if (this._joinSpecs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.joinSpecs = this._joinSpecs?.internalValue;
    }
    if (this._sqlFunctions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlFunctions = this._sqlFunctions?.internalValue;
    }
    if (this._sqlSnippets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlSnippets = this._sqlSnippets?.internalValue;
    }
    if (this._textInstructions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.textInstructions = this._textInstructions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenieAgentDefinitionInstructions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exampleQuestionSqls.internalValue = undefined;
      this._joinSpecs.internalValue = undefined;
      this._sqlFunctions.internalValue = undefined;
      this._sqlSnippets.internalValue = undefined;
      this._textInstructions.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exampleQuestionSqls.internalValue = value.exampleQuestionSqls;
      this._joinSpecs.internalValue = value.joinSpecs;
      this._sqlFunctions.internalValue = value.sqlFunctions;
      this._sqlSnippets.internalValue = value.sqlSnippets;
      this._textInstructions.internalValue = value.textInstructions;
    }
  }

  // example_question_sqls - computed: false, optional: true, required: false
  private _exampleQuestionSqls = new GenieAgentDefinitionInstructionsExampleQuestionSqlsList(this, "example_question_sqls", false);
  public get exampleQuestionSqls() {
    return this._exampleQuestionSqls;
  }
  public putExampleQuestionSqls(value: GenieAgentDefinitionInstructionsExampleQuestionSqls[] | cdktn.IResolvable) {
    this._exampleQuestionSqls.internalValue = value;
  }
  public resetExampleQuestionSqls() {
    this._exampleQuestionSqls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exampleQuestionSqlsInput() {
    return this._exampleQuestionSqls.internalValue;
  }

  // join_specs - computed: false, optional: true, required: false
  private _joinSpecs = new GenieAgentDefinitionInstructionsJoinSpecsList(this, "join_specs", false);
  public get joinSpecs() {
    return this._joinSpecs;
  }
  public putJoinSpecs(value: GenieAgentDefinitionInstructionsJoinSpecs[] | cdktn.IResolvable) {
    this._joinSpecs.internalValue = value;
  }
  public resetJoinSpecs() {
    this._joinSpecs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get joinSpecsInput() {
    return this._joinSpecs.internalValue;
  }

  // sql_functions - computed: false, optional: true, required: false
  private _sqlFunctions = new GenieAgentDefinitionInstructionsSqlFunctionsList(this, "sql_functions", false);
  public get sqlFunctions() {
    return this._sqlFunctions;
  }
  public putSqlFunctions(value: GenieAgentDefinitionInstructionsSqlFunctions[] | cdktn.IResolvable) {
    this._sqlFunctions.internalValue = value;
  }
  public resetSqlFunctions() {
    this._sqlFunctions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlFunctionsInput() {
    return this._sqlFunctions.internalValue;
  }

  // sql_snippets - computed: false, optional: true, required: false
  private _sqlSnippets = new GenieAgentDefinitionInstructionsSqlSnippetsOutputReference(this, "sql_snippets");
  public get sqlSnippets() {
    return this._sqlSnippets;
  }
  public putSqlSnippets(value: GenieAgentDefinitionInstructionsSqlSnippets) {
    this._sqlSnippets.internalValue = value;
  }
  public resetSqlSnippets() {
    this._sqlSnippets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlSnippetsInput() {
    return this._sqlSnippets.internalValue;
  }

  // text_instructions - computed: false, optional: true, required: false
  private _textInstructions = new GenieAgentDefinitionInstructionsTextInstructionsList(this, "text_instructions", false);
  public get textInstructions() {
    return this._textInstructions;
  }
  public putTextInstructions(value: GenieAgentDefinitionInstructionsTextInstructions[] | cdktn.IResolvable) {
    this._textInstructions.internalValue = value;
  }
  public resetTextInstructions() {
    this._textInstructions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInstructionsInput() {
    return this._textInstructions.internalValue;
  }
}
export interface GenieAgentDefinition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#benchmarks GenieAgent#benchmarks}
  */
  readonly benchmarks?: GenieAgentDefinitionBenchmarks;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#config GenieAgent#config}
  */
  readonly config?: GenieAgentDefinitionConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#data_sources GenieAgent#data_sources}
  */
  readonly dataSources?: GenieAgentDefinitionDataSources;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#instructions GenieAgent#instructions}
  */
  readonly instructions?: GenieAgentDefinitionInstructions;
}

export function genieAgentDefinitionToTerraform(struct?: GenieAgentDefinition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    benchmarks: genieAgentDefinitionBenchmarksToTerraform(struct!.benchmarks),
    config: genieAgentDefinitionConfigToTerraform(struct!.config),
    data_sources: genieAgentDefinitionDataSourcesToTerraform(struct!.dataSources),
    instructions: genieAgentDefinitionInstructionsToTerraform(struct!.instructions),
  }
}


export function genieAgentDefinitionToHclTerraform(struct?: GenieAgentDefinition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    benchmarks: {
      value: genieAgentDefinitionBenchmarksToHclTerraform(struct!.benchmarks),
      isBlock: true,
      type: "struct",
      storageClassType: "GenieAgentDefinitionBenchmarks",
    },
    config: {
      value: genieAgentDefinitionConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "struct",
      storageClassType: "GenieAgentDefinitionConfig",
    },
    data_sources: {
      value: genieAgentDefinitionDataSourcesToHclTerraform(struct!.dataSources),
      isBlock: true,
      type: "struct",
      storageClassType: "GenieAgentDefinitionDataSources",
    },
    instructions: {
      value: genieAgentDefinitionInstructionsToHclTerraform(struct!.instructions),
      isBlock: true,
      type: "struct",
      storageClassType: "GenieAgentDefinitionInstructions",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GenieAgentDefinitionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GenieAgentDefinition | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._benchmarks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.benchmarks = this._benchmarks?.internalValue;
    }
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    if (this._dataSources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSources = this._dataSources?.internalValue;
    }
    if (this._instructions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.instructions = this._instructions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenieAgentDefinition | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._benchmarks.internalValue = undefined;
      this._config.internalValue = undefined;
      this._dataSources.internalValue = undefined;
      this._instructions.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._benchmarks.internalValue = value.benchmarks;
      this._config.internalValue = value.config;
      this._dataSources.internalValue = value.dataSources;
      this._instructions.internalValue = value.instructions;
    }
  }

  // benchmarks - computed: false, optional: true, required: false
  private _benchmarks = new GenieAgentDefinitionBenchmarksOutputReference(this, "benchmarks");
  public get benchmarks() {
    return this._benchmarks;
  }
  public putBenchmarks(value: GenieAgentDefinitionBenchmarks) {
    this._benchmarks.internalValue = value;
  }
  public resetBenchmarks() {
    this._benchmarks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get benchmarksInput() {
    return this._benchmarks.internalValue;
  }

  // config - computed: false, optional: true, required: false
  private _config = new GenieAgentDefinitionConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: GenieAgentDefinitionConfig) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // data_sources - computed: false, optional: true, required: false
  private _dataSources = new GenieAgentDefinitionDataSourcesOutputReference(this, "data_sources");
  public get dataSources() {
    return this._dataSources;
  }
  public putDataSources(value: GenieAgentDefinitionDataSources) {
    this._dataSources.internalValue = value;
  }
  public resetDataSources() {
    this._dataSources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourcesInput() {
    return this._dataSources.internalValue;
  }

  // instructions - computed: false, optional: true, required: false
  private _instructions = new GenieAgentDefinitionInstructionsOutputReference(this, "instructions");
  public get instructions() {
    return this._instructions;
  }
  public putInstructions(value: GenieAgentDefinitionInstructions) {
    this._instructions.internalValue = value;
  }
  public resetInstructions() {
    this._instructions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instructionsInput() {
    return this._instructions.internalValue;
  }
}
export interface GenieAgentProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#workspace_id GenieAgent#workspace_id}
  */
  readonly workspaceId?: string;
}

export function genieAgentProviderConfigToTerraform(struct?: GenieAgentProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function genieAgentProviderConfigToHclTerraform(struct?: GenieAgentProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    workspace_id: {
      value: cdktn.stringToHclTerraform(struct!.workspaceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GenieAgentProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GenieAgentProviderConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._workspaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceId = this._workspaceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenieAgentProviderConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._workspaceId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._workspaceId = value.workspaceId;
    }
  }

  // workspace_id - computed: true, optional: true, required: false
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  public resetWorkspaceId() {
    this._workspaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent databricks_genie_agent}
*/
export class GenieAgent extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_genie_agent";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a GenieAgent resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GenieAgent to import
  * @param importFromId The id of the existing GenieAgent that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GenieAgent to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_genie_agent", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent databricks_genie_agent} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GenieAgentConfig
  */
  public constructor(scope: Construct, id: string, config: GenieAgentConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_genie_agent',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.142.0',
        providerVersionConstraint: '~> 1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._definition.internalValue = config.definition;
    this._description = config.description;
    this._displayName = config.displayName;
    this._genieAgentId = config.genieAgentId;
    this._parentPath = config.parentPath;
    this._providerConfig.internalValue = config.providerConfig;
    this._warehouseId = config.warehouseId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // definition - computed: false, optional: false, required: true
  private _definition = new GenieAgentDefinitionOutputReference(this, "definition");
  public get definition() {
    return this._definition;
  }
  public putDefinition(value: GenieAgentDefinition) {
    this._definition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionInput() {
    return this._definition.internalValue;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // effective_parent_path - computed: true, optional: false, required: false
  public get effectiveParentPath() {
    return this.getStringAttribute('effective_parent_path');
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // genie_agent_id - computed: true, optional: true, required: false
  private _genieAgentId?: string; 
  public get genieAgentId() {
    return this.getStringAttribute('genie_agent_id');
  }
  public set genieAgentId(value: string) {
    this._genieAgentId = value;
  }
  public resetGenieAgentId() {
    this._genieAgentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get genieAgentIdInput() {
    return this._genieAgentId;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // parent_path - computed: false, optional: true, required: false
  private _parentPath?: string; 
  public get parentPath() {
    return this.getStringAttribute('parent_path');
  }
  public set parentPath(value: string) {
    this._parentPath = value;
  }
  public resetParentPath() {
    this._parentPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentPathInput() {
    return this._parentPath;
  }

  // provider_config - computed: true, optional: true, required: false
  private _providerConfig = new GenieAgentProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: GenieAgentProviderConfig) {
    this._providerConfig.internalValue = value;
  }
  public resetProviderConfig() {
    this._providerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerConfigInput() {
    return this._providerConfig.internalValue;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // warehouse_id - computed: false, optional: false, required: true
  private _warehouseId?: string; 
  public get warehouseId() {
    return this.getStringAttribute('warehouse_id');
  }
  public set warehouseId(value: string) {
    this._warehouseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get warehouseIdInput() {
    return this._warehouseId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      definition: genieAgentDefinitionToTerraform(this._definition.internalValue),
      description: cdktn.stringToTerraform(this._description),
      display_name: cdktn.stringToTerraform(this._displayName),
      genie_agent_id: cdktn.stringToTerraform(this._genieAgentId),
      parent_path: cdktn.stringToTerraform(this._parentPath),
      provider_config: genieAgentProviderConfigToTerraform(this._providerConfig.internalValue),
      warehouse_id: cdktn.stringToTerraform(this._warehouseId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      definition: {
        value: genieAgentDefinitionToHclTerraform(this._definition.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GenieAgentDefinition",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktn.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      genie_agent_id: {
        value: cdktn.stringToHclTerraform(this._genieAgentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent_path: {
        value: cdktn.stringToHclTerraform(this._parentPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provider_config: {
        value: genieAgentProviderConfigToHclTerraform(this._providerConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GenieAgentProviderConfig",
      },
      warehouse_id: {
        value: cdktn.stringToHclTerraform(this._warehouseId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
