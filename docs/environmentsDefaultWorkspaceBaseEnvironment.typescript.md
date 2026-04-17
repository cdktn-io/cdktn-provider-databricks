# `environmentsDefaultWorkspaceBaseEnvironment` Submodule <a name="`environmentsDefaultWorkspaceBaseEnvironment` Submodule" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EnvironmentsDefaultWorkspaceBaseEnvironment <a name="EnvironmentsDefaultWorkspaceBaseEnvironment" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/environments_default_workspace_base_environment databricks_environments_default_workspace_base_environment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.Initializer"></a>

```typescript
import { environmentsDefaultWorkspaceBaseEnvironment } from '@cdktn/provider-databricks'

new environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment(scope: Construct, id: string, config?: EnvironmentsDefaultWorkspaceBaseEnvironmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentConfig">EnvironmentsDefaultWorkspaceBaseEnvironmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentConfig">EnvironmentsDefaultWorkspaceBaseEnvironmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.resetCpuWorkspaceBaseEnvironment">resetCpuWorkspaceBaseEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.resetGpuWorkspaceBaseEnvironment">resetGpuWorkspaceBaseEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.putProviderConfig"></a>

```typescript
public putProviderConfig(value: EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig">EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig</a>

---

##### `resetCpuWorkspaceBaseEnvironment` <a name="resetCpuWorkspaceBaseEnvironment" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.resetCpuWorkspaceBaseEnvironment"></a>

```typescript
public resetCpuWorkspaceBaseEnvironment(): void
```

##### `resetGpuWorkspaceBaseEnvironment` <a name="resetGpuWorkspaceBaseEnvironment" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.resetGpuWorkspaceBaseEnvironment"></a>

```typescript
public resetGpuWorkspaceBaseEnvironment(): void
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a EnvironmentsDefaultWorkspaceBaseEnvironment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.isConstruct"></a>

```typescript
import { environmentsDefaultWorkspaceBaseEnvironment } from '@cdktn/provider-databricks'

environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.isTerraformElement"></a>

```typescript
import { environmentsDefaultWorkspaceBaseEnvironment } from '@cdktn/provider-databricks'

environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.isTerraformResource"></a>

```typescript
import { environmentsDefaultWorkspaceBaseEnvironment } from '@cdktn/provider-databricks'

environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.generateConfigForImport"></a>

```typescript
import { environmentsDefaultWorkspaceBaseEnvironment } from '@cdktn/provider-databricks'

environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a EnvironmentsDefaultWorkspaceBaseEnvironment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EnvironmentsDefaultWorkspaceBaseEnvironment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EnvironmentsDefaultWorkspaceBaseEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/environments_default_workspace_base_environment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the EnvironmentsDefaultWorkspaceBaseEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference">EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.cpuWorkspaceBaseEnvironmentInput">cpuWorkspaceBaseEnvironmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.gpuWorkspaceBaseEnvironmentInput">gpuWorkspaceBaseEnvironmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig">EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.cpuWorkspaceBaseEnvironment">cpuWorkspaceBaseEnvironment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.gpuWorkspaceBaseEnvironment">gpuWorkspaceBaseEnvironment</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.providerConfig"></a>

```typescript
public readonly providerConfig: EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference">EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference</a>

---

##### `cpuWorkspaceBaseEnvironmentInput`<sup>Optional</sup> <a name="cpuWorkspaceBaseEnvironmentInput" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.cpuWorkspaceBaseEnvironmentInput"></a>

```typescript
public readonly cpuWorkspaceBaseEnvironmentInput: string;
```

- *Type:* string

---

##### `gpuWorkspaceBaseEnvironmentInput`<sup>Optional</sup> <a name="gpuWorkspaceBaseEnvironmentInput" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.gpuWorkspaceBaseEnvironmentInput"></a>

```typescript
public readonly gpuWorkspaceBaseEnvironmentInput: string;
```

- *Type:* string

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig">EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig</a>

---

##### `cpuWorkspaceBaseEnvironment`<sup>Required</sup> <a name="cpuWorkspaceBaseEnvironment" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.cpuWorkspaceBaseEnvironment"></a>

```typescript
public readonly cpuWorkspaceBaseEnvironment: string;
```

- *Type:* string

---

##### `gpuWorkspaceBaseEnvironment`<sup>Required</sup> <a name="gpuWorkspaceBaseEnvironment" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.gpuWorkspaceBaseEnvironment"></a>

```typescript
public readonly gpuWorkspaceBaseEnvironment: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EnvironmentsDefaultWorkspaceBaseEnvironmentConfig <a name="EnvironmentsDefaultWorkspaceBaseEnvironmentConfig" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentConfig.Initializer"></a>

```typescript
import { environmentsDefaultWorkspaceBaseEnvironment } from '@cdktn/provider-databricks'

const environmentsDefaultWorkspaceBaseEnvironmentConfig: environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentConfig.property.cpuWorkspaceBaseEnvironment">cpuWorkspaceBaseEnvironment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/environments_default_workspace_base_environment#cpu_workspace_base_environment EnvironmentsDefaultWorkspaceBaseEnvironment#cpu_workspace_base_environment}. |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentConfig.property.gpuWorkspaceBaseEnvironment">gpuWorkspaceBaseEnvironment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/environments_default_workspace_base_environment#gpu_workspace_base_environment EnvironmentsDefaultWorkspaceBaseEnvironment#gpu_workspace_base_environment}. |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig">EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/environments_default_workspace_base_environment#provider_config EnvironmentsDefaultWorkspaceBaseEnvironment#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `cpuWorkspaceBaseEnvironment`<sup>Optional</sup> <a name="cpuWorkspaceBaseEnvironment" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentConfig.property.cpuWorkspaceBaseEnvironment"></a>

```typescript
public readonly cpuWorkspaceBaseEnvironment: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/environments_default_workspace_base_environment#cpu_workspace_base_environment EnvironmentsDefaultWorkspaceBaseEnvironment#cpu_workspace_base_environment}.

---

##### `gpuWorkspaceBaseEnvironment`<sup>Optional</sup> <a name="gpuWorkspaceBaseEnvironment" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentConfig.property.gpuWorkspaceBaseEnvironment"></a>

```typescript
public readonly gpuWorkspaceBaseEnvironment: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/environments_default_workspace_base_environment#gpu_workspace_base_environment EnvironmentsDefaultWorkspaceBaseEnvironment#gpu_workspace_base_environment}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig">EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/environments_default_workspace_base_environment#provider_config EnvironmentsDefaultWorkspaceBaseEnvironment#provider_config}.

---

### EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig <a name="EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig.Initializer"></a>

```typescript
import { environmentsDefaultWorkspaceBaseEnvironment } from '@cdktn/provider-databricks'

const environmentsDefaultWorkspaceBaseEnvironmentProviderConfig: environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/environments_default_workspace_base_environment#workspace_id EnvironmentsDefaultWorkspaceBaseEnvironment#workspace_id}. |

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/environments_default_workspace_base_environment#workspace_id EnvironmentsDefaultWorkspaceBaseEnvironment#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference <a name="EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.Initializer"></a>

```typescript
import { environmentsDefaultWorkspaceBaseEnvironment } from '@cdktn/provider-databricks'

new environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig">EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig">EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig</a>

---



