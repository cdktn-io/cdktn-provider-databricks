# `aiSearchEndpoint` Submodule <a name="`aiSearchEndpoint` Submodule" id="@cdktn/provider-databricks.aiSearchEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AiSearchEndpoint <a name="AiSearchEndpoint" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/ai_search_endpoint databricks_ai_search_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.Initializer"></a>

```typescript
import { aiSearchEndpoint } from '@cdktn/provider-databricks'

new aiSearchEndpoint.AiSearchEndpoint(scope: Construct, id: string, config: AiSearchEndpointConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig">AiSearchEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig">AiSearchEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.putCustomTags">putCustomTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.resetBudgetPolicyId">resetBudgetPolicyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.resetCustomTags">resetCustomTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.resetEndpointId">resetEndpointId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.resetReplicaCount">resetReplicaCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.resetTargetQps">resetTargetQps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.resetUsagePolicyId">resetUsagePolicyId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCustomTags` <a name="putCustomTags" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.putCustomTags"></a>

```typescript
public putCustomTags(value: IResolvable | AiSearchEndpointCustomTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.putCustomTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTags">AiSearchEndpointCustomTags</a>[]

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.putProviderConfig"></a>

```typescript
public putProviderConfig(value: AiSearchEndpointProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfig">AiSearchEndpointProviderConfig</a>

---

##### `resetBudgetPolicyId` <a name="resetBudgetPolicyId" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.resetBudgetPolicyId"></a>

```typescript
public resetBudgetPolicyId(): void
```

##### `resetCustomTags` <a name="resetCustomTags" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.resetCustomTags"></a>

```typescript
public resetCustomTags(): void
```

##### `resetEndpointId` <a name="resetEndpointId" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.resetEndpointId"></a>

```typescript
public resetEndpointId(): void
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```

##### `resetReplicaCount` <a name="resetReplicaCount" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.resetReplicaCount"></a>

```typescript
public resetReplicaCount(): void
```

##### `resetTargetQps` <a name="resetTargetQps" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.resetTargetQps"></a>

```typescript
public resetTargetQps(): void
```

##### `resetUsagePolicyId` <a name="resetUsagePolicyId" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.resetUsagePolicyId"></a>

```typescript
public resetUsagePolicyId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AiSearchEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.isConstruct"></a>

```typescript
import { aiSearchEndpoint } from '@cdktn/provider-databricks'

aiSearchEndpoint.AiSearchEndpoint.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.isTerraformElement"></a>

```typescript
import { aiSearchEndpoint } from '@cdktn/provider-databricks'

aiSearchEndpoint.AiSearchEndpoint.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.isTerraformResource"></a>

```typescript
import { aiSearchEndpoint } from '@cdktn/provider-databricks'

aiSearchEndpoint.AiSearchEndpoint.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.generateConfigForImport"></a>

```typescript
import { aiSearchEndpoint } from '@cdktn/provider-databricks'

aiSearchEndpoint.AiSearchEndpoint.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a AiSearchEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AiSearchEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AiSearchEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/ai_search_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AiSearchEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.creator">creator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.customTags">customTags</a></code> | <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList">AiSearchEndpointCustomTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.effectiveBudgetPolicyId">effectiveBudgetPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.endpointStatus">endpointStatus</a></code> | <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference">AiSearchEndpointEndpointStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.indexCount">indexCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.lastUpdatedUser">lastUpdatedUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference">AiSearchEndpointProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.scalingInfo">scalingInfo</a></code> | <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference">AiSearchEndpointScalingInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.throughputInfo">throughputInfo</a></code> | <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference">AiSearchEndpointThroughputInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.budgetPolicyIdInput">budgetPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.customTagsInput">customTagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTags">AiSearchEndpointCustomTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.endpointIdInput">endpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.endpointTypeInput">endpointTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfig">AiSearchEndpointProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.replicaCountInput">replicaCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.targetQpsInput">targetQpsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.usagePolicyIdInput">usagePolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.budgetPolicyId">budgetPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.endpointId">endpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.endpointType">endpointType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.parent">parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.replicaCount">replicaCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.targetQps">targetQps</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.usagePolicyId">usagePolicyId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `creator`<sup>Required</sup> <a name="creator" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.creator"></a>

```typescript
public readonly creator: string;
```

- *Type:* string

---

##### `customTags`<sup>Required</sup> <a name="customTags" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.customTags"></a>

```typescript
public readonly customTags: AiSearchEndpointCustomTagsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList">AiSearchEndpointCustomTagsList</a>

---

##### `effectiveBudgetPolicyId`<sup>Required</sup> <a name="effectiveBudgetPolicyId" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.effectiveBudgetPolicyId"></a>

```typescript
public readonly effectiveBudgetPolicyId: string;
```

- *Type:* string

---

##### `endpointStatus`<sup>Required</sup> <a name="endpointStatus" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.endpointStatus"></a>

```typescript
public readonly endpointStatus: AiSearchEndpointEndpointStatusOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference">AiSearchEndpointEndpointStatusOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `indexCount`<sup>Required</sup> <a name="indexCount" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.indexCount"></a>

```typescript
public readonly indexCount: number;
```

- *Type:* number

---

##### `lastUpdatedUser`<sup>Required</sup> <a name="lastUpdatedUser" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.lastUpdatedUser"></a>

```typescript
public readonly lastUpdatedUser: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.providerConfig"></a>

```typescript
public readonly providerConfig: AiSearchEndpointProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference">AiSearchEndpointProviderConfigOutputReference</a>

---

##### `scalingInfo`<sup>Required</sup> <a name="scalingInfo" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.scalingInfo"></a>

```typescript
public readonly scalingInfo: AiSearchEndpointScalingInfoOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference">AiSearchEndpointScalingInfoOutputReference</a>

---

##### `throughputInfo`<sup>Required</sup> <a name="throughputInfo" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.throughputInfo"></a>

```typescript
public readonly throughputInfo: AiSearchEndpointThroughputInfoOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference">AiSearchEndpointThroughputInfoOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `budgetPolicyIdInput`<sup>Optional</sup> <a name="budgetPolicyIdInput" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.budgetPolicyIdInput"></a>

```typescript
public readonly budgetPolicyIdInput: string;
```

- *Type:* string

---

##### `customTagsInput`<sup>Optional</sup> <a name="customTagsInput" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.customTagsInput"></a>

```typescript
public readonly customTagsInput: IResolvable | AiSearchEndpointCustomTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTags">AiSearchEndpointCustomTags</a>[]

---

##### `endpointIdInput`<sup>Optional</sup> <a name="endpointIdInput" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.endpointIdInput"></a>

```typescript
public readonly endpointIdInput: string;
```

- *Type:* string

---

##### `endpointTypeInput`<sup>Optional</sup> <a name="endpointTypeInput" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.endpointTypeInput"></a>

```typescript
public readonly endpointTypeInput: string;
```

- *Type:* string

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | AiSearchEndpointProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfig">AiSearchEndpointProviderConfig</a>

---

##### `replicaCountInput`<sup>Optional</sup> <a name="replicaCountInput" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.replicaCountInput"></a>

```typescript
public readonly replicaCountInput: number;
```

- *Type:* number

---

##### `targetQpsInput`<sup>Optional</sup> <a name="targetQpsInput" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.targetQpsInput"></a>

```typescript
public readonly targetQpsInput: number;
```

- *Type:* number

---

##### `usagePolicyIdInput`<sup>Optional</sup> <a name="usagePolicyIdInput" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.usagePolicyIdInput"></a>

```typescript
public readonly usagePolicyIdInput: string;
```

- *Type:* string

---

##### `budgetPolicyId`<sup>Required</sup> <a name="budgetPolicyId" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.budgetPolicyId"></a>

```typescript
public readonly budgetPolicyId: string;
```

- *Type:* string

---

##### `endpointId`<sup>Required</sup> <a name="endpointId" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.endpointId"></a>

```typescript
public readonly endpointId: string;
```

- *Type:* string

---

##### `endpointType`<sup>Required</sup> <a name="endpointType" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.endpointType"></a>

```typescript
public readonly endpointType: string;
```

- *Type:* string

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

##### `replicaCount`<sup>Required</sup> <a name="replicaCount" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.replicaCount"></a>

```typescript
public readonly replicaCount: number;
```

- *Type:* number

---

##### `targetQps`<sup>Required</sup> <a name="targetQps" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.targetQps"></a>

```typescript
public readonly targetQps: number;
```

- *Type:* number

---

##### `usagePolicyId`<sup>Required</sup> <a name="usagePolicyId" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.usagePolicyId"></a>

```typescript
public readonly usagePolicyId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AiSearchEndpointConfig <a name="AiSearchEndpointConfig" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.Initializer"></a>

```typescript
import { aiSearchEndpoint } from '@cdktn/provider-databricks'

const aiSearchEndpointConfig: aiSearchEndpoint.AiSearchEndpointConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.endpointType">endpointType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/ai_search_endpoint#endpoint_type AiSearchEndpoint#endpoint_type}. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.parent">parent</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/ai_search_endpoint#parent AiSearchEndpoint#parent}. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.budgetPolicyId">budgetPolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/ai_search_endpoint#budget_policy_id AiSearchEndpoint#budget_policy_id}. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.customTags">customTags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTags">AiSearchEndpointCustomTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/ai_search_endpoint#custom_tags AiSearchEndpoint#custom_tags}. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.endpointId">endpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/ai_search_endpoint#endpoint_id AiSearchEndpoint#endpoint_id}. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfig">AiSearchEndpointProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/ai_search_endpoint#provider_config AiSearchEndpoint#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.replicaCount">replicaCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/ai_search_endpoint#replica_count AiSearchEndpoint#replica_count}. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.targetQps">targetQps</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/ai_search_endpoint#target_qps AiSearchEndpoint#target_qps}. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.usagePolicyId">usagePolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/ai_search_endpoint#usage_policy_id AiSearchEndpoint#usage_policy_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `endpointType`<sup>Required</sup> <a name="endpointType" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.endpointType"></a>

```typescript
public readonly endpointType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/ai_search_endpoint#endpoint_type AiSearchEndpoint#endpoint_type}.

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/ai_search_endpoint#parent AiSearchEndpoint#parent}.

---

##### `budgetPolicyId`<sup>Optional</sup> <a name="budgetPolicyId" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.budgetPolicyId"></a>

```typescript
public readonly budgetPolicyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/ai_search_endpoint#budget_policy_id AiSearchEndpoint#budget_policy_id}.

---

##### `customTags`<sup>Optional</sup> <a name="customTags" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.customTags"></a>

```typescript
public readonly customTags: IResolvable | AiSearchEndpointCustomTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTags">AiSearchEndpointCustomTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/ai_search_endpoint#custom_tags AiSearchEndpoint#custom_tags}.

---

##### `endpointId`<sup>Optional</sup> <a name="endpointId" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.endpointId"></a>

```typescript
public readonly endpointId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/ai_search_endpoint#endpoint_id AiSearchEndpoint#endpoint_id}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: AiSearchEndpointProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfig">AiSearchEndpointProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/ai_search_endpoint#provider_config AiSearchEndpoint#provider_config}.

---

##### `replicaCount`<sup>Optional</sup> <a name="replicaCount" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.replicaCount"></a>

```typescript
public readonly replicaCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/ai_search_endpoint#replica_count AiSearchEndpoint#replica_count}.

---

##### `targetQps`<sup>Optional</sup> <a name="targetQps" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.targetQps"></a>

```typescript
public readonly targetQps: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/ai_search_endpoint#target_qps AiSearchEndpoint#target_qps}.

---

##### `usagePolicyId`<sup>Optional</sup> <a name="usagePolicyId" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.usagePolicyId"></a>

```typescript
public readonly usagePolicyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/ai_search_endpoint#usage_policy_id AiSearchEndpoint#usage_policy_id}.

---

### AiSearchEndpointCustomTags <a name="AiSearchEndpointCustomTags" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTags.Initializer"></a>

```typescript
import { aiSearchEndpoint } from '@cdktn/provider-databricks'

const aiSearchEndpointCustomTags: aiSearchEndpoint.AiSearchEndpointCustomTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/ai_search_endpoint#key AiSearchEndpoint#key}. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/ai_search_endpoint#value AiSearchEndpoint#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/ai_search_endpoint#key AiSearchEndpoint#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/ai_search_endpoint#value AiSearchEndpoint#value}.

---

### AiSearchEndpointEndpointStatus <a name="AiSearchEndpointEndpointStatus" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatus.Initializer"></a>

```typescript
import { aiSearchEndpoint } from '@cdktn/provider-databricks'

const aiSearchEndpointEndpointStatus: aiSearchEndpoint.AiSearchEndpointEndpointStatus = { ... }
```


### AiSearchEndpointProviderConfig <a name="AiSearchEndpointProviderConfig" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfig.Initializer"></a>

```typescript
import { aiSearchEndpoint } from '@cdktn/provider-databricks'

const aiSearchEndpointProviderConfig: aiSearchEndpoint.AiSearchEndpointProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/ai_search_endpoint#workspace_id AiSearchEndpoint#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/ai_search_endpoint#workspace_id AiSearchEndpoint#workspace_id}.

---

### AiSearchEndpointScalingInfo <a name="AiSearchEndpointScalingInfo" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfo.Initializer"></a>

```typescript
import { aiSearchEndpoint } from '@cdktn/provider-databricks'

const aiSearchEndpointScalingInfo: aiSearchEndpoint.AiSearchEndpointScalingInfo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfo.property.requestedTargetQps">requestedTargetQps</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/ai_search_endpoint#requested_target_qps AiSearchEndpoint#requested_target_qps}. |

---

##### `requestedTargetQps`<sup>Optional</sup> <a name="requestedTargetQps" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfo.property.requestedTargetQps"></a>

```typescript
public readonly requestedTargetQps: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/ai_search_endpoint#requested_target_qps AiSearchEndpoint#requested_target_qps}.

---

### AiSearchEndpointThroughputInfo <a name="AiSearchEndpointThroughputInfo" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfo.Initializer"></a>

```typescript
import { aiSearchEndpoint } from '@cdktn/provider-databricks'

const aiSearchEndpointThroughputInfo: aiSearchEndpoint.AiSearchEndpointThroughputInfo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfo.property.maximumConcurrencyAllowed">maximumConcurrencyAllowed</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/ai_search_endpoint#maximum_concurrency_allowed AiSearchEndpoint#maximum_concurrency_allowed}. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfo.property.minimalConcurrencyAllowed">minimalConcurrencyAllowed</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/ai_search_endpoint#minimal_concurrency_allowed AiSearchEndpoint#minimal_concurrency_allowed}. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfo.property.requestedConcurrency">requestedConcurrency</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/ai_search_endpoint#requested_concurrency AiSearchEndpoint#requested_concurrency}. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfo.property.requestedNumReplicas">requestedNumReplicas</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/ai_search_endpoint#requested_num_replicas AiSearchEndpoint#requested_num_replicas}. |

---

##### `maximumConcurrencyAllowed`<sup>Optional</sup> <a name="maximumConcurrencyAllowed" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfo.property.maximumConcurrencyAllowed"></a>

```typescript
public readonly maximumConcurrencyAllowed: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/ai_search_endpoint#maximum_concurrency_allowed AiSearchEndpoint#maximum_concurrency_allowed}.

---

##### `minimalConcurrencyAllowed`<sup>Optional</sup> <a name="minimalConcurrencyAllowed" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfo.property.minimalConcurrencyAllowed"></a>

```typescript
public readonly minimalConcurrencyAllowed: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/ai_search_endpoint#minimal_concurrency_allowed AiSearchEndpoint#minimal_concurrency_allowed}.

---

##### `requestedConcurrency`<sup>Optional</sup> <a name="requestedConcurrency" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfo.property.requestedConcurrency"></a>

```typescript
public readonly requestedConcurrency: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/ai_search_endpoint#requested_concurrency AiSearchEndpoint#requested_concurrency}.

---

##### `requestedNumReplicas`<sup>Optional</sup> <a name="requestedNumReplicas" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfo.property.requestedNumReplicas"></a>

```typescript
public readonly requestedNumReplicas: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/ai_search_endpoint#requested_num_replicas AiSearchEndpoint#requested_num_replicas}.

---

## Classes <a name="Classes" id="Classes"></a>

### AiSearchEndpointCustomTagsList <a name="AiSearchEndpointCustomTagsList" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList.Initializer"></a>

```typescript
import { aiSearchEndpoint } from '@cdktn/provider-databricks'

new aiSearchEndpoint.AiSearchEndpointCustomTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList.get"></a>

```typescript
public get(index: number): AiSearchEndpointCustomTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTags">AiSearchEndpointCustomTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AiSearchEndpointCustomTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTags">AiSearchEndpointCustomTags</a>[]

---


### AiSearchEndpointCustomTagsOutputReference <a name="AiSearchEndpointCustomTagsOutputReference" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.Initializer"></a>

```typescript
import { aiSearchEndpoint } from '@cdktn/provider-databricks'

new aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTags">AiSearchEndpointCustomTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AiSearchEndpointCustomTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTags">AiSearchEndpointCustomTags</a>

---


### AiSearchEndpointEndpointStatusOutputReference <a name="AiSearchEndpointEndpointStatusOutputReference" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.Initializer"></a>

```typescript
import { aiSearchEndpoint } from '@cdktn/provider-databricks'

new aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatus">AiSearchEndpointEndpointStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AiSearchEndpointEndpointStatus;
```

- *Type:* <a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatus">AiSearchEndpointEndpointStatus</a>

---


### AiSearchEndpointProviderConfigOutputReference <a name="AiSearchEndpointProviderConfigOutputReference" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.Initializer"></a>

```typescript
import { aiSearchEndpoint } from '@cdktn/provider-databricks'

new aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfig">AiSearchEndpointProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AiSearchEndpointProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfig">AiSearchEndpointProviderConfig</a>

---


### AiSearchEndpointScalingInfoOutputReference <a name="AiSearchEndpointScalingInfoOutputReference" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.Initializer"></a>

```typescript
import { aiSearchEndpoint } from '@cdktn/provider-databricks'

new aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.resetRequestedTargetQps">resetRequestedTargetQps</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRequestedTargetQps` <a name="resetRequestedTargetQps" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.resetRequestedTargetQps"></a>

```typescript
public resetRequestedTargetQps(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.property.requestedTargetQpsInput">requestedTargetQpsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.property.requestedTargetQps">requestedTargetQps</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfo">AiSearchEndpointScalingInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `requestedTargetQpsInput`<sup>Optional</sup> <a name="requestedTargetQpsInput" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.property.requestedTargetQpsInput"></a>

```typescript
public readonly requestedTargetQpsInput: number;
```

- *Type:* number

---

##### `requestedTargetQps`<sup>Required</sup> <a name="requestedTargetQps" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.property.requestedTargetQps"></a>

```typescript
public readonly requestedTargetQps: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AiSearchEndpointScalingInfo;
```

- *Type:* <a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfo">AiSearchEndpointScalingInfo</a>

---


### AiSearchEndpointThroughputInfoOutputReference <a name="AiSearchEndpointThroughputInfoOutputReference" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.Initializer"></a>

```typescript
import { aiSearchEndpoint } from '@cdktn/provider-databricks'

new aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.resetMaximumConcurrencyAllowed">resetMaximumConcurrencyAllowed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.resetMinimalConcurrencyAllowed">resetMinimalConcurrencyAllowed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.resetRequestedConcurrency">resetRequestedConcurrency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.resetRequestedNumReplicas">resetRequestedNumReplicas</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaximumConcurrencyAllowed` <a name="resetMaximumConcurrencyAllowed" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.resetMaximumConcurrencyAllowed"></a>

```typescript
public resetMaximumConcurrencyAllowed(): void
```

##### `resetMinimalConcurrencyAllowed` <a name="resetMinimalConcurrencyAllowed" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.resetMinimalConcurrencyAllowed"></a>

```typescript
public resetMinimalConcurrencyAllowed(): void
```

##### `resetRequestedConcurrency` <a name="resetRequestedConcurrency" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.resetRequestedConcurrency"></a>

```typescript
public resetRequestedConcurrency(): void
```

##### `resetRequestedNumReplicas` <a name="resetRequestedNumReplicas" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.resetRequestedNumReplicas"></a>

```typescript
public resetRequestedNumReplicas(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.changeRequestMessage">changeRequestMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.changeRequestState">changeRequestState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.currentConcurrency">currentConcurrency</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.currentConcurrencyUtilizationPercentage">currentConcurrencyUtilizationPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.currentNumReplicas">currentNumReplicas</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.maximumConcurrencyAllowedInput">maximumConcurrencyAllowedInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.minimalConcurrencyAllowedInput">minimalConcurrencyAllowedInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.requestedConcurrencyInput">requestedConcurrencyInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.requestedNumReplicasInput">requestedNumReplicasInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.maximumConcurrencyAllowed">maximumConcurrencyAllowed</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.minimalConcurrencyAllowed">minimalConcurrencyAllowed</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.requestedConcurrency">requestedConcurrency</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.requestedNumReplicas">requestedNumReplicas</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfo">AiSearchEndpointThroughputInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `changeRequestMessage`<sup>Required</sup> <a name="changeRequestMessage" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.changeRequestMessage"></a>

```typescript
public readonly changeRequestMessage: string;
```

- *Type:* string

---

##### `changeRequestState`<sup>Required</sup> <a name="changeRequestState" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.changeRequestState"></a>

```typescript
public readonly changeRequestState: string;
```

- *Type:* string

---

##### `currentConcurrency`<sup>Required</sup> <a name="currentConcurrency" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.currentConcurrency"></a>

```typescript
public readonly currentConcurrency: number;
```

- *Type:* number

---

##### `currentConcurrencyUtilizationPercentage`<sup>Required</sup> <a name="currentConcurrencyUtilizationPercentage" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.currentConcurrencyUtilizationPercentage"></a>

```typescript
public readonly currentConcurrencyUtilizationPercentage: number;
```

- *Type:* number

---

##### `currentNumReplicas`<sup>Required</sup> <a name="currentNumReplicas" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.currentNumReplicas"></a>

```typescript
public readonly currentNumReplicas: number;
```

- *Type:* number

---

##### `maximumConcurrencyAllowedInput`<sup>Optional</sup> <a name="maximumConcurrencyAllowedInput" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.maximumConcurrencyAllowedInput"></a>

```typescript
public readonly maximumConcurrencyAllowedInput: number;
```

- *Type:* number

---

##### `minimalConcurrencyAllowedInput`<sup>Optional</sup> <a name="minimalConcurrencyAllowedInput" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.minimalConcurrencyAllowedInput"></a>

```typescript
public readonly minimalConcurrencyAllowedInput: number;
```

- *Type:* number

---

##### `requestedConcurrencyInput`<sup>Optional</sup> <a name="requestedConcurrencyInput" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.requestedConcurrencyInput"></a>

```typescript
public readonly requestedConcurrencyInput: number;
```

- *Type:* number

---

##### `requestedNumReplicasInput`<sup>Optional</sup> <a name="requestedNumReplicasInput" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.requestedNumReplicasInput"></a>

```typescript
public readonly requestedNumReplicasInput: number;
```

- *Type:* number

---

##### `maximumConcurrencyAllowed`<sup>Required</sup> <a name="maximumConcurrencyAllowed" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.maximumConcurrencyAllowed"></a>

```typescript
public readonly maximumConcurrencyAllowed: number;
```

- *Type:* number

---

##### `minimalConcurrencyAllowed`<sup>Required</sup> <a name="minimalConcurrencyAllowed" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.minimalConcurrencyAllowed"></a>

```typescript
public readonly minimalConcurrencyAllowed: number;
```

- *Type:* number

---

##### `requestedConcurrency`<sup>Required</sup> <a name="requestedConcurrency" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.requestedConcurrency"></a>

```typescript
public readonly requestedConcurrency: number;
```

- *Type:* number

---

##### `requestedNumReplicas`<sup>Required</sup> <a name="requestedNumReplicas" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.requestedNumReplicas"></a>

```typescript
public readonly requestedNumReplicas: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AiSearchEndpointThroughputInfo;
```

- *Type:* <a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfo">AiSearchEndpointThroughputInfo</a>

---



