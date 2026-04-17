# `environmentsWorkspaceBaseEnvironment` Submodule <a name="`environmentsWorkspaceBaseEnvironment` Submodule" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EnvironmentsWorkspaceBaseEnvironment <a name="EnvironmentsWorkspaceBaseEnvironment" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/environments_workspace_base_environment databricks_environments_workspace_base_environment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.Initializer"></a>

```typescript
import { environmentsWorkspaceBaseEnvironment } from '@cdktn/provider-databricks'

new environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment(scope: Construct, id: string, config: EnvironmentsWorkspaceBaseEnvironmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig">EnvironmentsWorkspaceBaseEnvironmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig">EnvironmentsWorkspaceBaseEnvironmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.resetBaseEnvironmentType">resetBaseEnvironmentType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.resetFilepath">resetFilepath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.resetWorkspaceBaseEnvironmentId">resetWorkspaceBaseEnvironmentId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.putProviderConfig"></a>

```typescript
public putProviderConfig(value: EnvironmentsWorkspaceBaseEnvironmentProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfig">EnvironmentsWorkspaceBaseEnvironmentProviderConfig</a>

---

##### `resetBaseEnvironmentType` <a name="resetBaseEnvironmentType" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.resetBaseEnvironmentType"></a>

```typescript
public resetBaseEnvironmentType(): void
```

##### `resetFilepath` <a name="resetFilepath" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.resetFilepath"></a>

```typescript
public resetFilepath(): void
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```

##### `resetWorkspaceBaseEnvironmentId` <a name="resetWorkspaceBaseEnvironmentId" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.resetWorkspaceBaseEnvironmentId"></a>

```typescript
public resetWorkspaceBaseEnvironmentId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a EnvironmentsWorkspaceBaseEnvironment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.isConstruct"></a>

```typescript
import { environmentsWorkspaceBaseEnvironment } from '@cdktn/provider-databricks'

environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.isTerraformElement"></a>

```typescript
import { environmentsWorkspaceBaseEnvironment } from '@cdktn/provider-databricks'

environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.isTerraformResource"></a>

```typescript
import { environmentsWorkspaceBaseEnvironment } from '@cdktn/provider-databricks'

environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.generateConfigForImport"></a>

```typescript
import { environmentsWorkspaceBaseEnvironment } from '@cdktn/provider-databricks'

environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a EnvironmentsWorkspaceBaseEnvironment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EnvironmentsWorkspaceBaseEnvironment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EnvironmentsWorkspaceBaseEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/environments_workspace_base_environment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the EnvironmentsWorkspaceBaseEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.creatorUserId">creatorUserId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.effectiveBaseEnvironmentType">effectiveBaseEnvironmentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.isDefault">isDefault</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.lastUpdatedUserId">lastUpdatedUserId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference">EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.baseEnvironmentTypeInput">baseEnvironmentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.filepathInput">filepathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfig">EnvironmentsWorkspaceBaseEnvironmentProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.workspaceBaseEnvironmentIdInput">workspaceBaseEnvironmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.baseEnvironmentType">baseEnvironmentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.filepath">filepath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.workspaceBaseEnvironmentId">workspaceBaseEnvironmentId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `creatorUserId`<sup>Required</sup> <a name="creatorUserId" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.creatorUserId"></a>

```typescript
public readonly creatorUserId: string;
```

- *Type:* string

---

##### `effectiveBaseEnvironmentType`<sup>Required</sup> <a name="effectiveBaseEnvironmentType" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.effectiveBaseEnvironmentType"></a>

```typescript
public readonly effectiveBaseEnvironmentType: string;
```

- *Type:* string

---

##### `isDefault`<sup>Required</sup> <a name="isDefault" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.isDefault"></a>

```typescript
public readonly isDefault: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `lastUpdatedUserId`<sup>Required</sup> <a name="lastUpdatedUserId" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.lastUpdatedUserId"></a>

```typescript
public readonly lastUpdatedUserId: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.providerConfig"></a>

```typescript
public readonly providerConfig: EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference">EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `baseEnvironmentTypeInput`<sup>Optional</sup> <a name="baseEnvironmentTypeInput" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.baseEnvironmentTypeInput"></a>

```typescript
public readonly baseEnvironmentTypeInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filepathInput`<sup>Optional</sup> <a name="filepathInput" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.filepathInput"></a>

```typescript
public readonly filepathInput: string;
```

- *Type:* string

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | EnvironmentsWorkspaceBaseEnvironmentProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfig">EnvironmentsWorkspaceBaseEnvironmentProviderConfig</a>

---

##### `workspaceBaseEnvironmentIdInput`<sup>Optional</sup> <a name="workspaceBaseEnvironmentIdInput" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.workspaceBaseEnvironmentIdInput"></a>

```typescript
public readonly workspaceBaseEnvironmentIdInput: string;
```

- *Type:* string

---

##### `baseEnvironmentType`<sup>Required</sup> <a name="baseEnvironmentType" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.baseEnvironmentType"></a>

```typescript
public readonly baseEnvironmentType: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `filepath`<sup>Required</sup> <a name="filepath" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.filepath"></a>

```typescript
public readonly filepath: string;
```

- *Type:* string

---

##### `workspaceBaseEnvironmentId`<sup>Required</sup> <a name="workspaceBaseEnvironmentId" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.workspaceBaseEnvironmentId"></a>

```typescript
public readonly workspaceBaseEnvironmentId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EnvironmentsWorkspaceBaseEnvironmentConfig <a name="EnvironmentsWorkspaceBaseEnvironmentConfig" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.Initializer"></a>

```typescript
import { environmentsWorkspaceBaseEnvironment } from '@cdktn/provider-databricks'

const environmentsWorkspaceBaseEnvironmentConfig: environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/environments_workspace_base_environment#display_name EnvironmentsWorkspaceBaseEnvironment#display_name}. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.baseEnvironmentType">baseEnvironmentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/environments_workspace_base_environment#base_environment_type EnvironmentsWorkspaceBaseEnvironment#base_environment_type}. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.filepath">filepath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/environments_workspace_base_environment#filepath EnvironmentsWorkspaceBaseEnvironment#filepath}. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfig">EnvironmentsWorkspaceBaseEnvironmentProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/environments_workspace_base_environment#provider_config EnvironmentsWorkspaceBaseEnvironment#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.workspaceBaseEnvironmentId">workspaceBaseEnvironmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/environments_workspace_base_environment#workspace_base_environment_id EnvironmentsWorkspaceBaseEnvironment#workspace_base_environment_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/environments_workspace_base_environment#display_name EnvironmentsWorkspaceBaseEnvironment#display_name}.

---

##### `baseEnvironmentType`<sup>Optional</sup> <a name="baseEnvironmentType" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.baseEnvironmentType"></a>

```typescript
public readonly baseEnvironmentType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/environments_workspace_base_environment#base_environment_type EnvironmentsWorkspaceBaseEnvironment#base_environment_type}.

---

##### `filepath`<sup>Optional</sup> <a name="filepath" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.filepath"></a>

```typescript
public readonly filepath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/environments_workspace_base_environment#filepath EnvironmentsWorkspaceBaseEnvironment#filepath}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: EnvironmentsWorkspaceBaseEnvironmentProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfig">EnvironmentsWorkspaceBaseEnvironmentProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/environments_workspace_base_environment#provider_config EnvironmentsWorkspaceBaseEnvironment#provider_config}.

---

##### `workspaceBaseEnvironmentId`<sup>Optional</sup> <a name="workspaceBaseEnvironmentId" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.workspaceBaseEnvironmentId"></a>

```typescript
public readonly workspaceBaseEnvironmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/environments_workspace_base_environment#workspace_base_environment_id EnvironmentsWorkspaceBaseEnvironment#workspace_base_environment_id}.

---

### EnvironmentsWorkspaceBaseEnvironmentProviderConfig <a name="EnvironmentsWorkspaceBaseEnvironmentProviderConfig" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfig.Initializer"></a>

```typescript
import { environmentsWorkspaceBaseEnvironment } from '@cdktn/provider-databricks'

const environmentsWorkspaceBaseEnvironmentProviderConfig: environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/environments_workspace_base_environment#workspace_id EnvironmentsWorkspaceBaseEnvironment#workspace_id}. |

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/environments_workspace_base_environment#workspace_id EnvironmentsWorkspaceBaseEnvironment#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference <a name="EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.Initializer"></a>

```typescript
import { environmentsWorkspaceBaseEnvironment } from '@cdktn/provider-databricks'

new environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfig">EnvironmentsWorkspaceBaseEnvironmentProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EnvironmentsWorkspaceBaseEnvironmentProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfig">EnvironmentsWorkspaceBaseEnvironmentProviderConfig</a>

---



