# `aibiDashboardEmbeddingAccessPolicySetting` Submodule <a name="`aibiDashboardEmbeddingAccessPolicySetting` Submodule" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AibiDashboardEmbeddingAccessPolicySetting <a name="AibiDashboardEmbeddingAccessPolicySetting" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/aibi_dashboard_embedding_access_policy_setting databricks_aibi_dashboard_embedding_access_policy_setting}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.Initializer"></a>

```typescript
import { aibiDashboardEmbeddingAccessPolicySetting } from '@cdktn/provider-databricks'

new aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting(scope: Construct, id: string, config: AibiDashboardEmbeddingAccessPolicySettingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingConfig">AibiDashboardEmbeddingAccessPolicySettingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingConfig">AibiDashboardEmbeddingAccessPolicySettingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.putAibiDashboardEmbeddingAccessPolicy">putAibiDashboardEmbeddingAccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.resetEtag">resetEtag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.resetSettingName">resetSettingName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAibiDashboardEmbeddingAccessPolicy` <a name="putAibiDashboardEmbeddingAccessPolicy" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.putAibiDashboardEmbeddingAccessPolicy"></a>

```typescript
public putAibiDashboardEmbeddingAccessPolicy(value: AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.putAibiDashboardEmbeddingAccessPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicy">AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicy</a>

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.putProviderConfig"></a>

```typescript
public putProviderConfig(value: AibiDashboardEmbeddingAccessPolicySettingProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingProviderConfig">AibiDashboardEmbeddingAccessPolicySettingProviderConfig</a>

---

##### `resetEtag` <a name="resetEtag" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.resetEtag"></a>

```typescript
public resetEtag(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```

##### `resetSettingName` <a name="resetSettingName" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.resetSettingName"></a>

```typescript
public resetSettingName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AibiDashboardEmbeddingAccessPolicySetting resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.isConstruct"></a>

```typescript
import { aibiDashboardEmbeddingAccessPolicySetting } from '@cdktn/provider-databricks'

aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.isTerraformElement"></a>

```typescript
import { aibiDashboardEmbeddingAccessPolicySetting } from '@cdktn/provider-databricks'

aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.isTerraformResource"></a>

```typescript
import { aibiDashboardEmbeddingAccessPolicySetting } from '@cdktn/provider-databricks'

aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.generateConfigForImport"></a>

```typescript
import { aibiDashboardEmbeddingAccessPolicySetting } from '@cdktn/provider-databricks'

aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a AibiDashboardEmbeddingAccessPolicySetting resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AibiDashboardEmbeddingAccessPolicySetting to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AibiDashboardEmbeddingAccessPolicySetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/aibi_dashboard_embedding_access_policy_setting#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AibiDashboardEmbeddingAccessPolicySetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.property.aibiDashboardEmbeddingAccessPolicy">aibiDashboardEmbeddingAccessPolicy</a></code> | <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference">AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingProviderConfigOutputReference">AibiDashboardEmbeddingAccessPolicySettingProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.property.aibiDashboardEmbeddingAccessPolicyInput">aibiDashboardEmbeddingAccessPolicyInput</a></code> | <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicy">AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.property.etagInput">etagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.property.providerConfigInput">providerConfigInput</a></code> | <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingProviderConfig">AibiDashboardEmbeddingAccessPolicySettingProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.property.settingNameInput">settingNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.property.settingName">settingName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `aibiDashboardEmbeddingAccessPolicy`<sup>Required</sup> <a name="aibiDashboardEmbeddingAccessPolicy" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.property.aibiDashboardEmbeddingAccessPolicy"></a>

```typescript
public readonly aibiDashboardEmbeddingAccessPolicy: AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference">AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference</a>

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.property.providerConfig"></a>

```typescript
public readonly providerConfig: AibiDashboardEmbeddingAccessPolicySettingProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingProviderConfigOutputReference">AibiDashboardEmbeddingAccessPolicySettingProviderConfigOutputReference</a>

---

##### `aibiDashboardEmbeddingAccessPolicyInput`<sup>Optional</sup> <a name="aibiDashboardEmbeddingAccessPolicyInput" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.property.aibiDashboardEmbeddingAccessPolicyInput"></a>

```typescript
public readonly aibiDashboardEmbeddingAccessPolicyInput: AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicy;
```

- *Type:* <a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicy">AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicy</a>

---

##### `etagInput`<sup>Optional</sup> <a name="etagInput" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.property.etagInput"></a>

```typescript
public readonly etagInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: AibiDashboardEmbeddingAccessPolicySettingProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingProviderConfig">AibiDashboardEmbeddingAccessPolicySettingProviderConfig</a>

---

##### `settingNameInput`<sup>Optional</sup> <a name="settingNameInput" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.property.settingNameInput"></a>

```typescript
public readonly settingNameInput: string;
```

- *Type:* string

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `settingName`<sup>Required</sup> <a name="settingName" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.property.settingName"></a>

```typescript
public readonly settingName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicy <a name="AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicy" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicy.Initializer"></a>

```typescript
import { aibiDashboardEmbeddingAccessPolicySetting } from '@cdktn/provider-databricks'

const aibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicy: aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicy.property.accessPolicyType">accessPolicyType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/aibi_dashboard_embedding_access_policy_setting#access_policy_type AibiDashboardEmbeddingAccessPolicySetting#access_policy_type}. |

---

##### `accessPolicyType`<sup>Required</sup> <a name="accessPolicyType" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicy.property.accessPolicyType"></a>

```typescript
public readonly accessPolicyType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/aibi_dashboard_embedding_access_policy_setting#access_policy_type AibiDashboardEmbeddingAccessPolicySetting#access_policy_type}.

---

### AibiDashboardEmbeddingAccessPolicySettingConfig <a name="AibiDashboardEmbeddingAccessPolicySettingConfig" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingConfig.Initializer"></a>

```typescript
import { aibiDashboardEmbeddingAccessPolicySetting } from '@cdktn/provider-databricks'

const aibiDashboardEmbeddingAccessPolicySettingConfig: aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingConfig.property.aibiDashboardEmbeddingAccessPolicy">aibiDashboardEmbeddingAccessPolicy</a></code> | <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicy">AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicy</a></code> | aibi_dashboard_embedding_access_policy block. |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingConfig.property.etag">etag</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/aibi_dashboard_embedding_access_policy_setting#etag AibiDashboardEmbeddingAccessPolicySetting#etag}. |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/aibi_dashboard_embedding_access_policy_setting#id AibiDashboardEmbeddingAccessPolicySetting#id}. |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingProviderConfig">AibiDashboardEmbeddingAccessPolicySettingProviderConfig</a></code> | provider_config block. |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingConfig.property.settingName">settingName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/aibi_dashboard_embedding_access_policy_setting#setting_name AibiDashboardEmbeddingAccessPolicySetting#setting_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `aibiDashboardEmbeddingAccessPolicy`<sup>Required</sup> <a name="aibiDashboardEmbeddingAccessPolicy" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingConfig.property.aibiDashboardEmbeddingAccessPolicy"></a>

```typescript
public readonly aibiDashboardEmbeddingAccessPolicy: AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicy;
```

- *Type:* <a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicy">AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicy</a>

aibi_dashboard_embedding_access_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/aibi_dashboard_embedding_access_policy_setting#aibi_dashboard_embedding_access_policy AibiDashboardEmbeddingAccessPolicySetting#aibi_dashboard_embedding_access_policy}

---

##### `etag`<sup>Optional</sup> <a name="etag" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingConfig.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/aibi_dashboard_embedding_access_policy_setting#etag AibiDashboardEmbeddingAccessPolicySetting#etag}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/aibi_dashboard_embedding_access_policy_setting#id AibiDashboardEmbeddingAccessPolicySetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: AibiDashboardEmbeddingAccessPolicySettingProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingProviderConfig">AibiDashboardEmbeddingAccessPolicySettingProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/aibi_dashboard_embedding_access_policy_setting#provider_config AibiDashboardEmbeddingAccessPolicySetting#provider_config}

---

##### `settingName`<sup>Optional</sup> <a name="settingName" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingConfig.property.settingName"></a>

```typescript
public readonly settingName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/aibi_dashboard_embedding_access_policy_setting#setting_name AibiDashboardEmbeddingAccessPolicySetting#setting_name}.

---

### AibiDashboardEmbeddingAccessPolicySettingProviderConfig <a name="AibiDashboardEmbeddingAccessPolicySettingProviderConfig" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingProviderConfig.Initializer"></a>

```typescript
import { aibiDashboardEmbeddingAccessPolicySetting } from '@cdktn/provider-databricks'

const aibiDashboardEmbeddingAccessPolicySettingProviderConfig: aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/aibi_dashboard_embedding_access_policy_setting#workspace_id AibiDashboardEmbeddingAccessPolicySetting#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/aibi_dashboard_embedding_access_policy_setting#workspace_id AibiDashboardEmbeddingAccessPolicySetting#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference <a name="AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference.Initializer"></a>

```typescript
import { aibiDashboardEmbeddingAccessPolicySetting } from '@cdktn/provider-databricks'

new aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference.property.accessPolicyTypeInput">accessPolicyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference.property.accessPolicyType">accessPolicyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicy">AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessPolicyTypeInput`<sup>Optional</sup> <a name="accessPolicyTypeInput" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference.property.accessPolicyTypeInput"></a>

```typescript
public readonly accessPolicyTypeInput: string;
```

- *Type:* string

---

##### `accessPolicyType`<sup>Required</sup> <a name="accessPolicyType" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference.property.accessPolicyType"></a>

```typescript
public readonly accessPolicyType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicy;
```

- *Type:* <a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicy">AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicy</a>

---


### AibiDashboardEmbeddingAccessPolicySettingProviderConfigOutputReference <a name="AibiDashboardEmbeddingAccessPolicySettingProviderConfigOutputReference" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingProviderConfigOutputReference.Initializer"></a>

```typescript
import { aibiDashboardEmbeddingAccessPolicySetting } from '@cdktn/provider-databricks'

new aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingProviderConfig">AibiDashboardEmbeddingAccessPolicySettingProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AibiDashboardEmbeddingAccessPolicySettingProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingProviderConfig">AibiDashboardEmbeddingAccessPolicySettingProviderConfig</a>

---



