# `supervisorAgentTool` Submodule <a name="`supervisorAgentTool` Submodule" id="@cdktn/provider-databricks.supervisorAgentTool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SupervisorAgentTool <a name="SupervisorAgentTool" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/supervisor_agent_tool databricks_supervisor_agent_tool}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.Initializer"></a>

```typescript
import { supervisorAgentTool } from '@cdktn/provider-databricks'

new supervisorAgentTool.SupervisorAgentTool(scope: Construct, id: string, config: SupervisorAgentToolConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig">SupervisorAgentToolConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig">SupervisorAgentToolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.putApp">putApp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.putGenieSpace">putGenieSpace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.putKnowledgeAssistant">putKnowledgeAssistant</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.putUcConnection">putUcConnection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.putUcFunction">putUcFunction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.putVolume">putVolume</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.resetApp">resetApp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.resetGenieSpace">resetGenieSpace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.resetKnowledgeAssistant">resetKnowledgeAssistant</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.resetUcConnection">resetUcConnection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.resetUcFunction">resetUcFunction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.resetVolume">resetVolume</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putApp` <a name="putApp" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.putApp"></a>

```typescript
public putApp(value: SupervisorAgentToolApp): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.putApp.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolApp">SupervisorAgentToolApp</a>

---

##### `putGenieSpace` <a name="putGenieSpace" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.putGenieSpace"></a>

```typescript
public putGenieSpace(value: SupervisorAgentToolGenieSpace): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.putGenieSpace.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpace">SupervisorAgentToolGenieSpace</a>

---

##### `putKnowledgeAssistant` <a name="putKnowledgeAssistant" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.putKnowledgeAssistant"></a>

```typescript
public putKnowledgeAssistant(value: SupervisorAgentToolKnowledgeAssistant): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.putKnowledgeAssistant.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistant">SupervisorAgentToolKnowledgeAssistant</a>

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.putProviderConfig"></a>

```typescript
public putProviderConfig(value: SupervisorAgentToolProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfig">SupervisorAgentToolProviderConfig</a>

---

##### `putUcConnection` <a name="putUcConnection" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.putUcConnection"></a>

```typescript
public putUcConnection(value: SupervisorAgentToolUcConnection): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.putUcConnection.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnection">SupervisorAgentToolUcConnection</a>

---

##### `putUcFunction` <a name="putUcFunction" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.putUcFunction"></a>

```typescript
public putUcFunction(value: SupervisorAgentToolUcFunction): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.putUcFunction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunction">SupervisorAgentToolUcFunction</a>

---

##### `putVolume` <a name="putVolume" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.putVolume"></a>

```typescript
public putVolume(value: SupervisorAgentToolVolume): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.putVolume.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolume">SupervisorAgentToolVolume</a>

---

##### `resetApp` <a name="resetApp" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.resetApp"></a>

```typescript
public resetApp(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetGenieSpace` <a name="resetGenieSpace" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.resetGenieSpace"></a>

```typescript
public resetGenieSpace(): void
```

##### `resetKnowledgeAssistant` <a name="resetKnowledgeAssistant" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.resetKnowledgeAssistant"></a>

```typescript
public resetKnowledgeAssistant(): void
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```

##### `resetUcConnection` <a name="resetUcConnection" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.resetUcConnection"></a>

```typescript
public resetUcConnection(): void
```

##### `resetUcFunction` <a name="resetUcFunction" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.resetUcFunction"></a>

```typescript
public resetUcFunction(): void
```

##### `resetVolume` <a name="resetVolume" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.resetVolume"></a>

```typescript
public resetVolume(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SupervisorAgentTool resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.isConstruct"></a>

```typescript
import { supervisorAgentTool } from '@cdktn/provider-databricks'

supervisorAgentTool.SupervisorAgentTool.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.isTerraformElement"></a>

```typescript
import { supervisorAgentTool } from '@cdktn/provider-databricks'

supervisorAgentTool.SupervisorAgentTool.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.isTerraformResource"></a>

```typescript
import { supervisorAgentTool } from '@cdktn/provider-databricks'

supervisorAgentTool.SupervisorAgentTool.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.generateConfigForImport"></a>

```typescript
import { supervisorAgentTool } from '@cdktn/provider-databricks'

supervisorAgentTool.SupervisorAgentTool.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a SupervisorAgentTool resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SupervisorAgentTool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SupervisorAgentTool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/supervisor_agent_tool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SupervisorAgentTool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.app">app</a></code> | <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference">SupervisorAgentToolAppOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.genieSpace">genieSpace</a></code> | <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference">SupervisorAgentToolGenieSpaceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.knowledgeAssistant">knowledgeAssistant</a></code> | <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference">SupervisorAgentToolKnowledgeAssistantOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference">SupervisorAgentToolProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.ucConnection">ucConnection</a></code> | <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference">SupervisorAgentToolUcConnectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.ucFunction">ucFunction</a></code> | <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference">SupervisorAgentToolUcFunctionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.volume">volume</a></code> | <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference">SupervisorAgentToolVolumeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.appInput">appInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolApp">SupervisorAgentToolApp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.genieSpaceInput">genieSpaceInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpace">SupervisorAgentToolGenieSpace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.knowledgeAssistantInput">knowledgeAssistantInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistant">SupervisorAgentToolKnowledgeAssistant</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfig">SupervisorAgentToolProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.toolIdInput">toolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.toolTypeInput">toolTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.ucConnectionInput">ucConnectionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnection">SupervisorAgentToolUcConnection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.ucFunctionInput">ucFunctionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunction">SupervisorAgentToolUcFunction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.volumeInput">volumeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolume">SupervisorAgentToolVolume</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.parent">parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.toolId">toolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.toolType">toolType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.app"></a>

```typescript
public readonly app: SupervisorAgentToolAppOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference">SupervisorAgentToolAppOutputReference</a>

---

##### `genieSpace`<sup>Required</sup> <a name="genieSpace" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.genieSpace"></a>

```typescript
public readonly genieSpace: SupervisorAgentToolGenieSpaceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference">SupervisorAgentToolGenieSpaceOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `knowledgeAssistant`<sup>Required</sup> <a name="knowledgeAssistant" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.knowledgeAssistant"></a>

```typescript
public readonly knowledgeAssistant: SupervisorAgentToolKnowledgeAssistantOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference">SupervisorAgentToolKnowledgeAssistantOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.providerConfig"></a>

```typescript
public readonly providerConfig: SupervisorAgentToolProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference">SupervisorAgentToolProviderConfigOutputReference</a>

---

##### `ucConnection`<sup>Required</sup> <a name="ucConnection" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.ucConnection"></a>

```typescript
public readonly ucConnection: SupervisorAgentToolUcConnectionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference">SupervisorAgentToolUcConnectionOutputReference</a>

---

##### `ucFunction`<sup>Required</sup> <a name="ucFunction" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.ucFunction"></a>

```typescript
public readonly ucFunction: SupervisorAgentToolUcFunctionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference">SupervisorAgentToolUcFunctionOutputReference</a>

---

##### `volume`<sup>Required</sup> <a name="volume" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.volume"></a>

```typescript
public readonly volume: SupervisorAgentToolVolumeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference">SupervisorAgentToolVolumeOutputReference</a>

---

##### `appInput`<sup>Optional</sup> <a name="appInput" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.appInput"></a>

```typescript
public readonly appInput: IResolvable | SupervisorAgentToolApp;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolApp">SupervisorAgentToolApp</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `genieSpaceInput`<sup>Optional</sup> <a name="genieSpaceInput" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.genieSpaceInput"></a>

```typescript
public readonly genieSpaceInput: IResolvable | SupervisorAgentToolGenieSpace;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpace">SupervisorAgentToolGenieSpace</a>

---

##### `knowledgeAssistantInput`<sup>Optional</sup> <a name="knowledgeAssistantInput" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.knowledgeAssistantInput"></a>

```typescript
public readonly knowledgeAssistantInput: IResolvable | SupervisorAgentToolKnowledgeAssistant;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistant">SupervisorAgentToolKnowledgeAssistant</a>

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | SupervisorAgentToolProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfig">SupervisorAgentToolProviderConfig</a>

---

##### `toolIdInput`<sup>Optional</sup> <a name="toolIdInput" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.toolIdInput"></a>

```typescript
public readonly toolIdInput: string;
```

- *Type:* string

---

##### `toolTypeInput`<sup>Optional</sup> <a name="toolTypeInput" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.toolTypeInput"></a>

```typescript
public readonly toolTypeInput: string;
```

- *Type:* string

---

##### `ucConnectionInput`<sup>Optional</sup> <a name="ucConnectionInput" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.ucConnectionInput"></a>

```typescript
public readonly ucConnectionInput: IResolvable | SupervisorAgentToolUcConnection;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnection">SupervisorAgentToolUcConnection</a>

---

##### `ucFunctionInput`<sup>Optional</sup> <a name="ucFunctionInput" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.ucFunctionInput"></a>

```typescript
public readonly ucFunctionInput: IResolvable | SupervisorAgentToolUcFunction;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunction">SupervisorAgentToolUcFunction</a>

---

##### `volumeInput`<sup>Optional</sup> <a name="volumeInput" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.volumeInput"></a>

```typescript
public readonly volumeInput: IResolvable | SupervisorAgentToolVolume;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolume">SupervisorAgentToolVolume</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

##### `toolId`<sup>Required</sup> <a name="toolId" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.toolId"></a>

```typescript
public readonly toolId: string;
```

- *Type:* string

---

##### `toolType`<sup>Required</sup> <a name="toolType" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.toolType"></a>

```typescript
public readonly toolType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SupervisorAgentToolApp <a name="SupervisorAgentToolApp" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolApp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolApp.Initializer"></a>

```typescript
import { supervisorAgentTool } from '@cdktn/provider-databricks'

const supervisorAgentToolApp: supervisorAgentTool.SupervisorAgentToolApp = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolApp.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/supervisor_agent_tool#name SupervisorAgentTool#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolApp.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/supervisor_agent_tool#name SupervisorAgentTool#name}.

---

### SupervisorAgentToolConfig <a name="SupervisorAgentToolConfig" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.Initializer"></a>

```typescript
import { supervisorAgentTool } from '@cdktn/provider-databricks'

const supervisorAgentToolConfig: supervisorAgentTool.SupervisorAgentToolConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.parent">parent</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/supervisor_agent_tool#parent SupervisorAgentTool#parent}. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.toolId">toolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/supervisor_agent_tool#tool_id SupervisorAgentTool#tool_id}. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.toolType">toolType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/supervisor_agent_tool#tool_type SupervisorAgentTool#tool_type}. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.app">app</a></code> | <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolApp">SupervisorAgentToolApp</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/supervisor_agent_tool#app SupervisorAgentTool#app}. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/supervisor_agent_tool#description SupervisorAgentTool#description}. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.genieSpace">genieSpace</a></code> | <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpace">SupervisorAgentToolGenieSpace</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/supervisor_agent_tool#genie_space SupervisorAgentTool#genie_space}. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.knowledgeAssistant">knowledgeAssistant</a></code> | <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistant">SupervisorAgentToolKnowledgeAssistant</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/supervisor_agent_tool#knowledge_assistant SupervisorAgentTool#knowledge_assistant}. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfig">SupervisorAgentToolProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/supervisor_agent_tool#provider_config SupervisorAgentTool#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.ucConnection">ucConnection</a></code> | <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnection">SupervisorAgentToolUcConnection</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/supervisor_agent_tool#uc_connection SupervisorAgentTool#uc_connection}. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.ucFunction">ucFunction</a></code> | <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunction">SupervisorAgentToolUcFunction</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/supervisor_agent_tool#uc_function SupervisorAgentTool#uc_function}. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.volume">volume</a></code> | <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolume">SupervisorAgentToolVolume</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/supervisor_agent_tool#volume SupervisorAgentTool#volume}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/supervisor_agent_tool#parent SupervisorAgentTool#parent}.

---

##### `toolId`<sup>Required</sup> <a name="toolId" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.toolId"></a>

```typescript
public readonly toolId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/supervisor_agent_tool#tool_id SupervisorAgentTool#tool_id}.

---

##### `toolType`<sup>Required</sup> <a name="toolType" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.toolType"></a>

```typescript
public readonly toolType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/supervisor_agent_tool#tool_type SupervisorAgentTool#tool_type}.

---

##### `app`<sup>Optional</sup> <a name="app" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.app"></a>

```typescript
public readonly app: SupervisorAgentToolApp;
```

- *Type:* <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolApp">SupervisorAgentToolApp</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/supervisor_agent_tool#app SupervisorAgentTool#app}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/supervisor_agent_tool#description SupervisorAgentTool#description}.

---

##### `genieSpace`<sup>Optional</sup> <a name="genieSpace" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.genieSpace"></a>

```typescript
public readonly genieSpace: SupervisorAgentToolGenieSpace;
```

- *Type:* <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpace">SupervisorAgentToolGenieSpace</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/supervisor_agent_tool#genie_space SupervisorAgentTool#genie_space}.

---

##### `knowledgeAssistant`<sup>Optional</sup> <a name="knowledgeAssistant" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.knowledgeAssistant"></a>

```typescript
public readonly knowledgeAssistant: SupervisorAgentToolKnowledgeAssistant;
```

- *Type:* <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistant">SupervisorAgentToolKnowledgeAssistant</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/supervisor_agent_tool#knowledge_assistant SupervisorAgentTool#knowledge_assistant}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: SupervisorAgentToolProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfig">SupervisorAgentToolProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/supervisor_agent_tool#provider_config SupervisorAgentTool#provider_config}.

---

##### `ucConnection`<sup>Optional</sup> <a name="ucConnection" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.ucConnection"></a>

```typescript
public readonly ucConnection: SupervisorAgentToolUcConnection;
```

- *Type:* <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnection">SupervisorAgentToolUcConnection</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/supervisor_agent_tool#uc_connection SupervisorAgentTool#uc_connection}.

---

##### `ucFunction`<sup>Optional</sup> <a name="ucFunction" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.ucFunction"></a>

```typescript
public readonly ucFunction: SupervisorAgentToolUcFunction;
```

- *Type:* <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunction">SupervisorAgentToolUcFunction</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/supervisor_agent_tool#uc_function SupervisorAgentTool#uc_function}.

---

##### `volume`<sup>Optional</sup> <a name="volume" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.volume"></a>

```typescript
public readonly volume: SupervisorAgentToolVolume;
```

- *Type:* <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolume">SupervisorAgentToolVolume</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/supervisor_agent_tool#volume SupervisorAgentTool#volume}.

---

### SupervisorAgentToolGenieSpace <a name="SupervisorAgentToolGenieSpace" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpace"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpace.Initializer"></a>

```typescript
import { supervisorAgentTool } from '@cdktn/provider-databricks'

const supervisorAgentToolGenieSpace: supervisorAgentTool.SupervisorAgentToolGenieSpace = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpace.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/supervisor_agent_tool#id SupervisorAgentTool#id}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpace.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/supervisor_agent_tool#id SupervisorAgentTool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### SupervisorAgentToolKnowledgeAssistant <a name="SupervisorAgentToolKnowledgeAssistant" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistant"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistant.Initializer"></a>

```typescript
import { supervisorAgentTool } from '@cdktn/provider-databricks'

const supervisorAgentToolKnowledgeAssistant: supervisorAgentTool.SupervisorAgentToolKnowledgeAssistant = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistant.property.knowledgeAssistantId">knowledgeAssistantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/supervisor_agent_tool#knowledge_assistant_id SupervisorAgentTool#knowledge_assistant_id}. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistant.property.servingEndpointName">servingEndpointName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/supervisor_agent_tool#serving_endpoint_name SupervisorAgentTool#serving_endpoint_name}. |

---

##### `knowledgeAssistantId`<sup>Required</sup> <a name="knowledgeAssistantId" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistant.property.knowledgeAssistantId"></a>

```typescript
public readonly knowledgeAssistantId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/supervisor_agent_tool#knowledge_assistant_id SupervisorAgentTool#knowledge_assistant_id}.

---

##### `servingEndpointName`<sup>Optional</sup> <a name="servingEndpointName" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistant.property.servingEndpointName"></a>

```typescript
public readonly servingEndpointName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/supervisor_agent_tool#serving_endpoint_name SupervisorAgentTool#serving_endpoint_name}.

---

### SupervisorAgentToolProviderConfig <a name="SupervisorAgentToolProviderConfig" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfig.Initializer"></a>

```typescript
import { supervisorAgentTool } from '@cdktn/provider-databricks'

const supervisorAgentToolProviderConfig: supervisorAgentTool.SupervisorAgentToolProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/supervisor_agent_tool#workspace_id SupervisorAgentTool#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/supervisor_agent_tool#workspace_id SupervisorAgentTool#workspace_id}.

---

### SupervisorAgentToolUcConnection <a name="SupervisorAgentToolUcConnection" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnection.Initializer"></a>

```typescript
import { supervisorAgentTool } from '@cdktn/provider-databricks'

const supervisorAgentToolUcConnection: supervisorAgentTool.SupervisorAgentToolUcConnection = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnection.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/supervisor_agent_tool#name SupervisorAgentTool#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnection.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/supervisor_agent_tool#name SupervisorAgentTool#name}.

---

### SupervisorAgentToolUcFunction <a name="SupervisorAgentToolUcFunction" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunction.Initializer"></a>

```typescript
import { supervisorAgentTool } from '@cdktn/provider-databricks'

const supervisorAgentToolUcFunction: supervisorAgentTool.SupervisorAgentToolUcFunction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunction.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/supervisor_agent_tool#name SupervisorAgentTool#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunction.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/supervisor_agent_tool#name SupervisorAgentTool#name}.

---

### SupervisorAgentToolVolume <a name="SupervisorAgentToolVolume" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolume"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolume.Initializer"></a>

```typescript
import { supervisorAgentTool } from '@cdktn/provider-databricks'

const supervisorAgentToolVolume: supervisorAgentTool.SupervisorAgentToolVolume = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolume.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/supervisor_agent_tool#name SupervisorAgentTool#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolume.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/supervisor_agent_tool#name SupervisorAgentTool#name}.

---

## Classes <a name="Classes" id="Classes"></a>

### SupervisorAgentToolAppOutputReference <a name="SupervisorAgentToolAppOutputReference" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.Initializer"></a>

```typescript
import { supervisorAgentTool } from '@cdktn/provider-databricks'

new supervisorAgentTool.SupervisorAgentToolAppOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolApp">SupervisorAgentToolApp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SupervisorAgentToolApp;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolApp">SupervisorAgentToolApp</a>

---


### SupervisorAgentToolGenieSpaceOutputReference <a name="SupervisorAgentToolGenieSpaceOutputReference" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.Initializer"></a>

```typescript
import { supervisorAgentTool } from '@cdktn/provider-databricks'

new supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpace">SupervisorAgentToolGenieSpace</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SupervisorAgentToolGenieSpace;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpace">SupervisorAgentToolGenieSpace</a>

---


### SupervisorAgentToolKnowledgeAssistantOutputReference <a name="SupervisorAgentToolKnowledgeAssistantOutputReference" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.Initializer"></a>

```typescript
import { supervisorAgentTool } from '@cdktn/provider-databricks'

new supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.resetServingEndpointName">resetServingEndpointName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetServingEndpointName` <a name="resetServingEndpointName" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.resetServingEndpointName"></a>

```typescript
public resetServingEndpointName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.property.knowledgeAssistantIdInput">knowledgeAssistantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.property.servingEndpointNameInput">servingEndpointNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.property.knowledgeAssistantId">knowledgeAssistantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.property.servingEndpointName">servingEndpointName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistant">SupervisorAgentToolKnowledgeAssistant</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `knowledgeAssistantIdInput`<sup>Optional</sup> <a name="knowledgeAssistantIdInput" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.property.knowledgeAssistantIdInput"></a>

```typescript
public readonly knowledgeAssistantIdInput: string;
```

- *Type:* string

---

##### `servingEndpointNameInput`<sup>Optional</sup> <a name="servingEndpointNameInput" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.property.servingEndpointNameInput"></a>

```typescript
public readonly servingEndpointNameInput: string;
```

- *Type:* string

---

##### `knowledgeAssistantId`<sup>Required</sup> <a name="knowledgeAssistantId" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.property.knowledgeAssistantId"></a>

```typescript
public readonly knowledgeAssistantId: string;
```

- *Type:* string

---

##### `servingEndpointName`<sup>Required</sup> <a name="servingEndpointName" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.property.servingEndpointName"></a>

```typescript
public readonly servingEndpointName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SupervisorAgentToolKnowledgeAssistant;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistant">SupervisorAgentToolKnowledgeAssistant</a>

---


### SupervisorAgentToolProviderConfigOutputReference <a name="SupervisorAgentToolProviderConfigOutputReference" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.Initializer"></a>

```typescript
import { supervisorAgentTool } from '@cdktn/provider-databricks'

new supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfig">SupervisorAgentToolProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SupervisorAgentToolProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfig">SupervisorAgentToolProviderConfig</a>

---


### SupervisorAgentToolUcConnectionOutputReference <a name="SupervisorAgentToolUcConnectionOutputReference" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.Initializer"></a>

```typescript
import { supervisorAgentTool } from '@cdktn/provider-databricks'

new supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnection">SupervisorAgentToolUcConnection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SupervisorAgentToolUcConnection;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnection">SupervisorAgentToolUcConnection</a>

---


### SupervisorAgentToolUcFunctionOutputReference <a name="SupervisorAgentToolUcFunctionOutputReference" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.Initializer"></a>

```typescript
import { supervisorAgentTool } from '@cdktn/provider-databricks'

new supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunction">SupervisorAgentToolUcFunction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SupervisorAgentToolUcFunction;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunction">SupervisorAgentToolUcFunction</a>

---


### SupervisorAgentToolVolumeOutputReference <a name="SupervisorAgentToolVolumeOutputReference" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.Initializer"></a>

```typescript
import { supervisorAgentTool } from '@cdktn/provider-databricks'

new supervisorAgentTool.SupervisorAgentToolVolumeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolume">SupervisorAgentToolVolume</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SupervisorAgentToolVolume;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolume">SupervisorAgentToolVolume</a>

---



