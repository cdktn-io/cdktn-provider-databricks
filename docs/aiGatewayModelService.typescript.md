# `aiGatewayModelService` Submodule <a name="`aiGatewayModelService` Submodule" id="@cdktn/provider-databricks.aiGatewayModelService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AiGatewayModelService <a name="AiGatewayModelService" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_service databricks_ai_gateway_model_service}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.Initializer"></a>

```typescript
import { aiGatewayModelService } from '@cdktn/provider-databricks'

new aiGatewayModelService.AiGatewayModelService(scope: Construct, id: string, config: AiGatewayModelServiceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfig">AiGatewayModelServiceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfig">AiGatewayModelServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.putConfig">putConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.resetConfig">resetConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.resetOwner">resetOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConfig` <a name="putConfig" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.putConfig"></a>

```typescript
public putConfig(value: AiGatewayModelServiceConfigA): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigA">AiGatewayModelServiceConfigA</a>

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.putProviderConfig"></a>

```typescript
public putProviderConfig(value: AiGatewayModelServiceProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfig">AiGatewayModelServiceProviderConfig</a>

---

##### `resetComment` <a name="resetComment" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetConfig` <a name="resetConfig" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.resetConfig"></a>

```typescript
public resetConfig(): void
```

##### `resetOwner` <a name="resetOwner" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.resetOwner"></a>

```typescript
public resetOwner(): void
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AiGatewayModelService resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.isConstruct"></a>

```typescript
import { aiGatewayModelService } from '@cdktn/provider-databricks'

aiGatewayModelService.AiGatewayModelService.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.isTerraformElement"></a>

```typescript
import { aiGatewayModelService } from '@cdktn/provider-databricks'

aiGatewayModelService.AiGatewayModelService.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.isTerraformResource"></a>

```typescript
import { aiGatewayModelService } from '@cdktn/provider-databricks'

aiGatewayModelService.AiGatewayModelService.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.generateConfigForImport"></a>

```typescript
import { aiGatewayModelService } from '@cdktn/provider-databricks'

aiGatewayModelService.AiGatewayModelService.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a AiGatewayModelService resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AiGatewayModelService to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AiGatewayModelService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AiGatewayModelService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.browseOnly">browseOnly</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference">AiGatewayModelServiceConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.createdBy">createdBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.effectiveOwner">effectiveOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.metastoreId">metastoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference">AiGatewayModelServiceProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.supportedApiTypes">supportedApiTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.updatedBy">updatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.configInput">configInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigA">AiGatewayModelServiceConfigA</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.modelServiceIdInput">modelServiceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.ownerInput">ownerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfig">AiGatewayModelServiceProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.modelServiceId">modelServiceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.parent">parent</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `browseOnly`<sup>Required</sup> <a name="browseOnly" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.browseOnly"></a>

```typescript
public readonly browseOnly: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.config"></a>

```typescript
public readonly config: AiGatewayModelServiceConfigAOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference">AiGatewayModelServiceConfigAOutputReference</a>

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveOwner`<sup>Required</sup> <a name="effectiveOwner" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.effectiveOwner"></a>

```typescript
public readonly effectiveOwner: string;
```

- *Type:* string

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `metastoreId`<sup>Required</sup> <a name="metastoreId" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.metastoreId"></a>

```typescript
public readonly metastoreId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.providerConfig"></a>

```typescript
public readonly providerConfig: AiGatewayModelServiceProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference">AiGatewayModelServiceProviderConfigOutputReference</a>

---

##### `supportedApiTypes`<sup>Required</sup> <a name="supportedApiTypes" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.supportedApiTypes"></a>

```typescript
public readonly supportedApiTypes: string[];
```

- *Type:* string[]

---

##### `updatedBy`<sup>Required</sup> <a name="updatedBy" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.updatedBy"></a>

```typescript
public readonly updatedBy: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.configInput"></a>

```typescript
public readonly configInput: IResolvable | AiGatewayModelServiceConfigA;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigA">AiGatewayModelServiceConfigA</a>

---

##### `modelServiceIdInput`<sup>Optional</sup> <a name="modelServiceIdInput" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.modelServiceIdInput"></a>

```typescript
public readonly modelServiceIdInput: string;
```

- *Type:* string

---

##### `ownerInput`<sup>Optional</sup> <a name="ownerInput" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.ownerInput"></a>

```typescript
public readonly ownerInput: string;
```

- *Type:* string

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | AiGatewayModelServiceProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfig">AiGatewayModelServiceProviderConfig</a>

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `modelServiceId`<sup>Required</sup> <a name="modelServiceId" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.modelServiceId"></a>

```typescript
public readonly modelServiceId: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AiGatewayModelServiceConfig <a name="AiGatewayModelServiceConfig" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfig.Initializer"></a>

```typescript
import { aiGatewayModelService } from '@cdktn/provider-databricks'

const aiGatewayModelServiceConfig: aiGatewayModelService.AiGatewayModelServiceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfig.property.modelServiceId">modelServiceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_service#model_service_id AiGatewayModelService#model_service_id}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfig.property.parent">parent</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_service#parent AiGatewayModelService#parent}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfig.property.comment">comment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_service#comment AiGatewayModelService#comment}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfig.property.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigA">AiGatewayModelServiceConfigA</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_service#config AiGatewayModelService#config}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfig.property.owner">owner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_service#owner AiGatewayModelService#owner}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfig">AiGatewayModelServiceProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_service#provider_config AiGatewayModelService#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `modelServiceId`<sup>Required</sup> <a name="modelServiceId" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfig.property.modelServiceId"></a>

```typescript
public readonly modelServiceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_service#model_service_id AiGatewayModelService#model_service_id}.

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_service#parent AiGatewayModelService#parent}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfig.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_service#comment AiGatewayModelService#comment}.

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfig.property.config"></a>

```typescript
public readonly config: AiGatewayModelServiceConfigA;
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigA">AiGatewayModelServiceConfigA</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_service#config AiGatewayModelService#config}.

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfig.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_service#owner AiGatewayModelService#owner}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: AiGatewayModelServiceProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfig">AiGatewayModelServiceProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_service#provider_config AiGatewayModelService#provider_config}.

---

### AiGatewayModelServiceConfigA <a name="AiGatewayModelServiceConfigA" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigA.Initializer"></a>

```typescript
import { aiGatewayModelService } from '@cdktn/provider-databricks'

const aiGatewayModelServiceConfigA: aiGatewayModelService.AiGatewayModelServiceConfigA = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigA.property.inferenceTable">inferenceTable</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTable">AiGatewayModelServiceConfigInferenceTable</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_service#inference_table AiGatewayModelService#inference_table}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigA.property.rateLimits">rateLimits</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimits">AiGatewayModelServiceConfigRateLimits</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_service#rate_limits AiGatewayModelService#rate_limits}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigA.property.routing">routing</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRouting">AiGatewayModelServiceConfigRouting</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_service#routing AiGatewayModelService#routing}. |

---

##### `inferenceTable`<sup>Optional</sup> <a name="inferenceTable" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigA.property.inferenceTable"></a>

```typescript
public readonly inferenceTable: AiGatewayModelServiceConfigInferenceTable;
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTable">AiGatewayModelServiceConfigInferenceTable</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_service#inference_table AiGatewayModelService#inference_table}.

---

##### `rateLimits`<sup>Optional</sup> <a name="rateLimits" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigA.property.rateLimits"></a>

```typescript
public readonly rateLimits: IResolvable | AiGatewayModelServiceConfigRateLimits[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimits">AiGatewayModelServiceConfigRateLimits</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_service#rate_limits AiGatewayModelService#rate_limits}.

---

##### `routing`<sup>Optional</sup> <a name="routing" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigA.property.routing"></a>

```typescript
public readonly routing: AiGatewayModelServiceConfigRouting;
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRouting">AiGatewayModelServiceConfigRouting</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_service#routing AiGatewayModelService#routing}.

---

### AiGatewayModelServiceConfigInferenceTable <a name="AiGatewayModelServiceConfigInferenceTable" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTable.Initializer"></a>

```typescript
import { aiGatewayModelService } from '@cdktn/provider-databricks'

const aiGatewayModelServiceConfigInferenceTable: aiGatewayModelService.AiGatewayModelServiceConfigInferenceTable = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTable.property.parent">parent</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_service#parent AiGatewayModelService#parent}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTable.property.disabled">disabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_service#disabled AiGatewayModelService#disabled}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTable.property.tableNamePrefix">tableNamePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_service#table_name_prefix AiGatewayModelService#table_name_prefix}. |

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTable.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_service#parent AiGatewayModelService#parent}.

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTable.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_service#disabled AiGatewayModelService#disabled}.

---

##### `tableNamePrefix`<sup>Optional</sup> <a name="tableNamePrefix" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTable.property.tableNamePrefix"></a>

```typescript
public readonly tableNamePrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_service#table_name_prefix AiGatewayModelService#table_name_prefix}.

---

### AiGatewayModelServiceConfigRateLimits <a name="AiGatewayModelServiceConfigRateLimits" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimits"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimits.Initializer"></a>

```typescript
import { aiGatewayModelService } from '@cdktn/provider-databricks'

const aiGatewayModelServiceConfigRateLimits: aiGatewayModelService.AiGatewayModelServiceConfigRateLimits = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimits.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_service#key AiGatewayModelService#key}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimits.property.renewalPeriod">renewalPeriod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_service#renewal_period AiGatewayModelService#renewal_period}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimits.property.principal">principal</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_service#principal AiGatewayModelService#principal}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimits.property.requests">requests</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_service#requests AiGatewayModelService#requests}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimits.property.requestTagKey">requestTagKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_service#request_tag_key AiGatewayModelService#request_tag_key}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimits.property.requestTagValue">requestTagValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_service#request_tag_value AiGatewayModelService#request_tag_value}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimits.property.tokens">tokens</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_service#tokens AiGatewayModelService#tokens}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimits.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_service#key AiGatewayModelService#key}.

---

##### `renewalPeriod`<sup>Required</sup> <a name="renewalPeriod" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimits.property.renewalPeriod"></a>

```typescript
public readonly renewalPeriod: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_service#renewal_period AiGatewayModelService#renewal_period}.

---

##### `principal`<sup>Optional</sup> <a name="principal" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimits.property.principal"></a>

```typescript
public readonly principal: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_service#principal AiGatewayModelService#principal}.

---

##### `requests`<sup>Optional</sup> <a name="requests" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimits.property.requests"></a>

```typescript
public readonly requests: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_service#requests AiGatewayModelService#requests}.

---

##### `requestTagKey`<sup>Optional</sup> <a name="requestTagKey" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimits.property.requestTagKey"></a>

```typescript
public readonly requestTagKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_service#request_tag_key AiGatewayModelService#request_tag_key}.

---

##### `requestTagValue`<sup>Optional</sup> <a name="requestTagValue" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimits.property.requestTagValue"></a>

```typescript
public readonly requestTagValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_service#request_tag_value AiGatewayModelService#request_tag_value}.

---

##### `tokens`<sup>Optional</sup> <a name="tokens" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimits.property.tokens"></a>

```typescript
public readonly tokens: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_service#tokens AiGatewayModelService#tokens}.

---

### AiGatewayModelServiceConfigRouting <a name="AiGatewayModelServiceConfigRouting" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRouting"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRouting.Initializer"></a>

```typescript
import { aiGatewayModelService } from '@cdktn/provider-databricks'

const aiGatewayModelServiceConfigRouting: aiGatewayModelService.AiGatewayModelServiceConfigRouting = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRouting.property.destinations">destinations</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinations">AiGatewayModelServiceConfigRoutingDestinations</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_service#destinations AiGatewayModelService#destinations}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRouting.property.fallback">fallback</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallback">AiGatewayModelServiceConfigRoutingFallback</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_service#fallback AiGatewayModelService#fallback}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRouting.property.firstTokenTimeout">firstTokenTimeout</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_service#first_token_timeout AiGatewayModelService#first_token_timeout}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRouting.property.trafficSplitting">trafficSplitting</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplitting">AiGatewayModelServiceConfigRoutingTrafficSplitting</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_service#traffic_splitting AiGatewayModelService#traffic_splitting}. |

---

##### `destinations`<sup>Optional</sup> <a name="destinations" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRouting.property.destinations"></a>

```typescript
public readonly destinations: IResolvable | AiGatewayModelServiceConfigRoutingDestinations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinations">AiGatewayModelServiceConfigRoutingDestinations</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_service#destinations AiGatewayModelService#destinations}.

---

##### `fallback`<sup>Optional</sup> <a name="fallback" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRouting.property.fallback"></a>

```typescript
public readonly fallback: AiGatewayModelServiceConfigRoutingFallback;
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallback">AiGatewayModelServiceConfigRoutingFallback</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_service#fallback AiGatewayModelService#fallback}.

---

##### `firstTokenTimeout`<sup>Optional</sup> <a name="firstTokenTimeout" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRouting.property.firstTokenTimeout"></a>

```typescript
public readonly firstTokenTimeout: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_service#first_token_timeout AiGatewayModelService#first_token_timeout}.

---

##### `trafficSplitting`<sup>Optional</sup> <a name="trafficSplitting" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRouting.property.trafficSplitting"></a>

```typescript
public readonly trafficSplitting: AiGatewayModelServiceConfigRoutingTrafficSplitting;
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplitting">AiGatewayModelServiceConfigRoutingTrafficSplitting</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_service#traffic_splitting AiGatewayModelService#traffic_splitting}.

---

### AiGatewayModelServiceConfigRoutingDestinations <a name="AiGatewayModelServiceConfigRoutingDestinations" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinations.Initializer"></a>

```typescript
import { aiGatewayModelService } from '@cdktn/provider-databricks'

const aiGatewayModelServiceConfigRoutingDestinations: aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinations.property.destinationType">destinationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_service#destination_type AiGatewayModelService#destination_type}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinations.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_service#name AiGatewayModelService#name}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinations.property.externalModelConfig">externalModelConfig</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfig">AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_service#external_model_config AiGatewayModelService#external_model_config}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinations.property.payPerTokenConfig">payPerTokenConfig</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfig">AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_service#pay_per_token_config AiGatewayModelService#pay_per_token_config}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinations.property.provisionedThroughputConfig">provisionedThroughputConfig</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfig">AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_service#provisioned_throughput_config AiGatewayModelService#provisioned_throughput_config}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinations.property.trafficPercentage">trafficPercentage</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_service#traffic_percentage AiGatewayModelService#traffic_percentage}. |

---

##### `destinationType`<sup>Required</sup> <a name="destinationType" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinations.property.destinationType"></a>

```typescript
public readonly destinationType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_service#destination_type AiGatewayModelService#destination_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinations.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_service#name AiGatewayModelService#name}.

---

##### `externalModelConfig`<sup>Optional</sup> <a name="externalModelConfig" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinations.property.externalModelConfig"></a>

```typescript
public readonly externalModelConfig: AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfig">AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_service#external_model_config AiGatewayModelService#external_model_config}.

---

##### `payPerTokenConfig`<sup>Optional</sup> <a name="payPerTokenConfig" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinations.property.payPerTokenConfig"></a>

```typescript
public readonly payPerTokenConfig: AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfig">AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_service#pay_per_token_config AiGatewayModelService#pay_per_token_config}.

---

##### `provisionedThroughputConfig`<sup>Optional</sup> <a name="provisionedThroughputConfig" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinations.property.provisionedThroughputConfig"></a>

```typescript
public readonly provisionedThroughputConfig: AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfig">AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_service#provisioned_throughput_config AiGatewayModelService#provisioned_throughput_config}.

---

##### `trafficPercentage`<sup>Optional</sup> <a name="trafficPercentage" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinations.property.trafficPercentage"></a>

```typescript
public readonly trafficPercentage: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_service#traffic_percentage AiGatewayModelService#traffic_percentage}.

---

### AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfig <a name="AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfig" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfig.Initializer"></a>

```typescript
import { aiGatewayModelService } from '@cdktn/provider-databricks'

const aiGatewayModelServiceConfigRoutingDestinationsExternalModelConfig: aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfig.property.modelProviderService">modelProviderService</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_service#model_provider_service AiGatewayModelService#model_provider_service}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfig.property.target">target</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTarget">AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTarget</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_service#target AiGatewayModelService#target}. |

---

##### `modelProviderService`<sup>Required</sup> <a name="modelProviderService" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfig.property.modelProviderService"></a>

```typescript
public readonly modelProviderService: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_service#model_provider_service AiGatewayModelService#model_provider_service}.

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfig.property.target"></a>

```typescript
public readonly target: AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTarget;
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTarget">AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTarget</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_service#target AiGatewayModelService#target}.

---

### AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTarget <a name="AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTarget" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTarget.Initializer"></a>

```typescript
import { aiGatewayModelService } from '@cdktn/provider-databricks'

const aiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTarget: aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTarget = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTarget.property.model">model</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_service#model AiGatewayModelService#model}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTarget.property.nativeApiTypes">nativeApiTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_service#native_api_types AiGatewayModelService#native_api_types}. |

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTarget.property.model"></a>

```typescript
public readonly model: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_service#model AiGatewayModelService#model}.

---

##### `nativeApiTypes`<sup>Optional</sup> <a name="nativeApiTypes" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTarget.property.nativeApiTypes"></a>

```typescript
public readonly nativeApiTypes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_service#native_api_types AiGatewayModelService#native_api_types}.

---

### AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfig <a name="AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfig" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfig.Initializer"></a>

```typescript
import { aiGatewayModelService } from '@cdktn/provider-databricks'

const aiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfig: aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfig.property.model">model</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_service#model AiGatewayModelService#model}. |

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfig.property.model"></a>

```typescript
public readonly model: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_service#model AiGatewayModelService#model}.

---

### AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfig <a name="AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfig" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfig.Initializer"></a>

```typescript
import { aiGatewayModelService } from '@cdktn/provider-databricks'

const aiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfig: aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfig.property.modelServingEndpoint">modelServingEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_service#model_serving_endpoint AiGatewayModelService#model_serving_endpoint}. |

---

##### `modelServingEndpoint`<sup>Required</sup> <a name="modelServingEndpoint" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfig.property.modelServingEndpoint"></a>

```typescript
public readonly modelServingEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_service#model_serving_endpoint AiGatewayModelService#model_serving_endpoint}.

---

### AiGatewayModelServiceConfigRoutingFallback <a name="AiGatewayModelServiceConfigRoutingFallback" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallback"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallback.Initializer"></a>

```typescript
import { aiGatewayModelService } from '@cdktn/provider-databricks'

const aiGatewayModelServiceConfigRoutingFallback: aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallback = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallback.property.destinations">destinations</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinations">AiGatewayModelServiceConfigRoutingFallbackDestinations</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_service#destinations AiGatewayModelService#destinations}. |

---

##### `destinations`<sup>Optional</sup> <a name="destinations" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallback.property.destinations"></a>

```typescript
public readonly destinations: IResolvable | AiGatewayModelServiceConfigRoutingFallbackDestinations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinations">AiGatewayModelServiceConfigRoutingFallbackDestinations</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_service#destinations AiGatewayModelService#destinations}.

---

### AiGatewayModelServiceConfigRoutingFallbackDestinations <a name="AiGatewayModelServiceConfigRoutingFallbackDestinations" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinations.Initializer"></a>

```typescript
import { aiGatewayModelService } from '@cdktn/provider-databricks'

const aiGatewayModelServiceConfigRoutingFallbackDestinations: aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinations.property.destinationType">destinationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_service#destination_type AiGatewayModelService#destination_type}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinations.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_service#name AiGatewayModelService#name}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinations.property.externalModelConfig">externalModelConfig</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfig">AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_service#external_model_config AiGatewayModelService#external_model_config}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinations.property.payPerTokenConfig">payPerTokenConfig</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfig">AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_service#pay_per_token_config AiGatewayModelService#pay_per_token_config}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinations.property.provisionedThroughputConfig">provisionedThroughputConfig</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfig">AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_service#provisioned_throughput_config AiGatewayModelService#provisioned_throughput_config}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinations.property.trafficPercentage">trafficPercentage</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_service#traffic_percentage AiGatewayModelService#traffic_percentage}. |

---

##### `destinationType`<sup>Required</sup> <a name="destinationType" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinations.property.destinationType"></a>

```typescript
public readonly destinationType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_service#destination_type AiGatewayModelService#destination_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinations.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_service#name AiGatewayModelService#name}.

---

##### `externalModelConfig`<sup>Optional</sup> <a name="externalModelConfig" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinations.property.externalModelConfig"></a>

```typescript
public readonly externalModelConfig: AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfig">AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_service#external_model_config AiGatewayModelService#external_model_config}.

---

##### `payPerTokenConfig`<sup>Optional</sup> <a name="payPerTokenConfig" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinations.property.payPerTokenConfig"></a>

```typescript
public readonly payPerTokenConfig: AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfig">AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_service#pay_per_token_config AiGatewayModelService#pay_per_token_config}.

---

##### `provisionedThroughputConfig`<sup>Optional</sup> <a name="provisionedThroughputConfig" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinations.property.provisionedThroughputConfig"></a>

```typescript
public readonly provisionedThroughputConfig: AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfig">AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_service#provisioned_throughput_config AiGatewayModelService#provisioned_throughput_config}.

---

##### `trafficPercentage`<sup>Optional</sup> <a name="trafficPercentage" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinations.property.trafficPercentage"></a>

```typescript
public readonly trafficPercentage: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_service#traffic_percentage AiGatewayModelService#traffic_percentage}.

---

### AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfig <a name="AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfig" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfig.Initializer"></a>

```typescript
import { aiGatewayModelService } from '@cdktn/provider-databricks'

const aiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfig: aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfig.property.modelProviderService">modelProviderService</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_service#model_provider_service AiGatewayModelService#model_provider_service}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfig.property.target">target</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTarget">AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTarget</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_service#target AiGatewayModelService#target}. |

---

##### `modelProviderService`<sup>Required</sup> <a name="modelProviderService" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfig.property.modelProviderService"></a>

```typescript
public readonly modelProviderService: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_service#model_provider_service AiGatewayModelService#model_provider_service}.

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfig.property.target"></a>

```typescript
public readonly target: AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTarget;
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTarget">AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTarget</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_service#target AiGatewayModelService#target}.

---

### AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTarget <a name="AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTarget" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTarget.Initializer"></a>

```typescript
import { aiGatewayModelService } from '@cdktn/provider-databricks'

const aiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTarget: aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTarget = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTarget.property.model">model</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_service#model AiGatewayModelService#model}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTarget.property.nativeApiTypes">nativeApiTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_service#native_api_types AiGatewayModelService#native_api_types}. |

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTarget.property.model"></a>

```typescript
public readonly model: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_service#model AiGatewayModelService#model}.

---

##### `nativeApiTypes`<sup>Optional</sup> <a name="nativeApiTypes" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTarget.property.nativeApiTypes"></a>

```typescript
public readonly nativeApiTypes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_service#native_api_types AiGatewayModelService#native_api_types}.

---

### AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfig <a name="AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfig" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfig.Initializer"></a>

```typescript
import { aiGatewayModelService } from '@cdktn/provider-databricks'

const aiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfig: aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfig.property.model">model</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_service#model AiGatewayModelService#model}. |

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfig.property.model"></a>

```typescript
public readonly model: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_service#model AiGatewayModelService#model}.

---

### AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfig <a name="AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfig" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfig.Initializer"></a>

```typescript
import { aiGatewayModelService } from '@cdktn/provider-databricks'

const aiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfig: aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfig.property.modelServingEndpoint">modelServingEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_service#model_serving_endpoint AiGatewayModelService#model_serving_endpoint}. |

---

##### `modelServingEndpoint`<sup>Required</sup> <a name="modelServingEndpoint" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfig.property.modelServingEndpoint"></a>

```typescript
public readonly modelServingEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_service#model_serving_endpoint AiGatewayModelService#model_serving_endpoint}.

---

### AiGatewayModelServiceConfigRoutingTrafficSplitting <a name="AiGatewayModelServiceConfigRoutingTrafficSplitting" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplitting"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplitting.Initializer"></a>

```typescript
import { aiGatewayModelService } from '@cdktn/provider-databricks'

const aiGatewayModelServiceConfigRoutingTrafficSplitting: aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplitting = { ... }
```


### AiGatewayModelServiceProviderConfig <a name="AiGatewayModelServiceProviderConfig" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfig.Initializer"></a>

```typescript
import { aiGatewayModelService } from '@cdktn/provider-databricks'

const aiGatewayModelServiceProviderConfig: aiGatewayModelService.AiGatewayModelServiceProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_service#workspace_id AiGatewayModelService#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_service#workspace_id AiGatewayModelService#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### AiGatewayModelServiceConfigAOutputReference <a name="AiGatewayModelServiceConfigAOutputReference" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.Initializer"></a>

```typescript
import { aiGatewayModelService } from '@cdktn/provider-databricks'

new aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.putInferenceTable">putInferenceTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.putRateLimits">putRateLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.putRouting">putRouting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.resetInferenceTable">resetInferenceTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.resetRateLimits">resetRateLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.resetRouting">resetRouting</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInferenceTable` <a name="putInferenceTable" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.putInferenceTable"></a>

```typescript
public putInferenceTable(value: AiGatewayModelServiceConfigInferenceTable): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.putInferenceTable.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTable">AiGatewayModelServiceConfigInferenceTable</a>

---

##### `putRateLimits` <a name="putRateLimits" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.putRateLimits"></a>

```typescript
public putRateLimits(value: IResolvable | AiGatewayModelServiceConfigRateLimits[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.putRateLimits.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimits">AiGatewayModelServiceConfigRateLimits</a>[]

---

##### `putRouting` <a name="putRouting" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.putRouting"></a>

```typescript
public putRouting(value: AiGatewayModelServiceConfigRouting): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.putRouting.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRouting">AiGatewayModelServiceConfigRouting</a>

---

##### `resetInferenceTable` <a name="resetInferenceTable" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.resetInferenceTable"></a>

```typescript
public resetInferenceTable(): void
```

##### `resetRateLimits` <a name="resetRateLimits" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.resetRateLimits"></a>

```typescript
public resetRateLimits(): void
```

##### `resetRouting` <a name="resetRouting" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.resetRouting"></a>

```typescript
public resetRouting(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.property.inferenceTable">inferenceTable</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference">AiGatewayModelServiceConfigInferenceTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.property.rateLimits">rateLimits</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsList">AiGatewayModelServiceConfigRateLimitsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.property.routing">routing</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference">AiGatewayModelServiceConfigRoutingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.property.inferenceTableInput">inferenceTableInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTable">AiGatewayModelServiceConfigInferenceTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.property.rateLimitsInput">rateLimitsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimits">AiGatewayModelServiceConfigRateLimits</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.property.routingInput">routingInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRouting">AiGatewayModelServiceConfigRouting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigA">AiGatewayModelServiceConfigA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inferenceTable`<sup>Required</sup> <a name="inferenceTable" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.property.inferenceTable"></a>

```typescript
public readonly inferenceTable: AiGatewayModelServiceConfigInferenceTableOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference">AiGatewayModelServiceConfigInferenceTableOutputReference</a>

---

##### `rateLimits`<sup>Required</sup> <a name="rateLimits" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.property.rateLimits"></a>

```typescript
public readonly rateLimits: AiGatewayModelServiceConfigRateLimitsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsList">AiGatewayModelServiceConfigRateLimitsList</a>

---

##### `routing`<sup>Required</sup> <a name="routing" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.property.routing"></a>

```typescript
public readonly routing: AiGatewayModelServiceConfigRoutingOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference">AiGatewayModelServiceConfigRoutingOutputReference</a>

---

##### `inferenceTableInput`<sup>Optional</sup> <a name="inferenceTableInput" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.property.inferenceTableInput"></a>

```typescript
public readonly inferenceTableInput: IResolvable | AiGatewayModelServiceConfigInferenceTable;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTable">AiGatewayModelServiceConfigInferenceTable</a>

---

##### `rateLimitsInput`<sup>Optional</sup> <a name="rateLimitsInput" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.property.rateLimitsInput"></a>

```typescript
public readonly rateLimitsInput: IResolvable | AiGatewayModelServiceConfigRateLimits[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimits">AiGatewayModelServiceConfigRateLimits</a>[]

---

##### `routingInput`<sup>Optional</sup> <a name="routingInput" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.property.routingInput"></a>

```typescript
public readonly routingInput: IResolvable | AiGatewayModelServiceConfigRouting;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRouting">AiGatewayModelServiceConfigRouting</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AiGatewayModelServiceConfigA;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigA">AiGatewayModelServiceConfigA</a>

---


### AiGatewayModelServiceConfigInferenceTableOutputReference <a name="AiGatewayModelServiceConfigInferenceTableOutputReference" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.Initializer"></a>

```typescript
import { aiGatewayModelService } from '@cdktn/provider-databricks'

new aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.resetTableNamePrefix">resetTableNamePrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisabled` <a name="resetDisabled" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.resetDisabled"></a>

```typescript
public resetDisabled(): void
```

##### `resetTableNamePrefix` <a name="resetTableNamePrefix" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.resetTableNamePrefix"></a>

```typescript
public resetTableNamePrefix(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.property.isDeleted">isDeleted</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.property.table">table</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.property.disabledInput">disabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.property.tableNamePrefixInput">tableNamePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.property.disabled">disabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.property.parent">parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.property.tableNamePrefix">tableNamePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTable">AiGatewayModelServiceConfigInferenceTable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isDeleted`<sup>Required</sup> <a name="isDeleted" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.property.isDeleted"></a>

```typescript
public readonly isDeleted: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.property.table"></a>

```typescript
public readonly table: string;
```

- *Type:* string

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.property.disabledInput"></a>

```typescript
public readonly disabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `tableNamePrefixInput`<sup>Optional</sup> <a name="tableNamePrefixInput" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.property.tableNamePrefixInput"></a>

```typescript
public readonly tableNamePrefixInput: string;
```

- *Type:* string

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

##### `tableNamePrefix`<sup>Required</sup> <a name="tableNamePrefix" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.property.tableNamePrefix"></a>

```typescript
public readonly tableNamePrefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AiGatewayModelServiceConfigInferenceTable;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTable">AiGatewayModelServiceConfigInferenceTable</a>

---


### AiGatewayModelServiceConfigRateLimitsList <a name="AiGatewayModelServiceConfigRateLimitsList" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsList.Initializer"></a>

```typescript
import { aiGatewayModelService } from '@cdktn/provider-databricks'

new aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsList.get"></a>

```typescript
public get(index: number): AiGatewayModelServiceConfigRateLimitsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimits">AiGatewayModelServiceConfigRateLimits</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AiGatewayModelServiceConfigRateLimits[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimits">AiGatewayModelServiceConfigRateLimits</a>[]

---


### AiGatewayModelServiceConfigRateLimitsOutputReference <a name="AiGatewayModelServiceConfigRateLimitsOutputReference" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.Initializer"></a>

```typescript
import { aiGatewayModelService } from '@cdktn/provider-databricks'

new aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.resetPrincipal">resetPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.resetRequests">resetRequests</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.resetRequestTagKey">resetRequestTagKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.resetRequestTagValue">resetRequestTagValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.resetTokens">resetTokens</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPrincipal` <a name="resetPrincipal" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.resetPrincipal"></a>

```typescript
public resetPrincipal(): void
```

##### `resetRequests` <a name="resetRequests" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.resetRequests"></a>

```typescript
public resetRequests(): void
```

##### `resetRequestTagKey` <a name="resetRequestTagKey" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.resetRequestTagKey"></a>

```typescript
public resetRequestTagKey(): void
```

##### `resetRequestTagValue` <a name="resetRequestTagValue" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.resetRequestTagValue"></a>

```typescript
public resetRequestTagValue(): void
```

##### `resetTokens` <a name="resetTokens" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.resetTokens"></a>

```typescript
public resetTokens(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.property.principalInput">principalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.property.renewalPeriodInput">renewalPeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.property.requestsInput">requestsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.property.requestTagKeyInput">requestTagKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.property.requestTagValueInput">requestTagValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.property.tokensInput">tokensInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.property.principal">principal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.property.renewalPeriod">renewalPeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.property.requests">requests</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.property.requestTagKey">requestTagKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.property.requestTagValue">requestTagValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.property.tokens">tokens</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimits">AiGatewayModelServiceConfigRateLimits</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `principalInput`<sup>Optional</sup> <a name="principalInput" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.property.principalInput"></a>

```typescript
public readonly principalInput: string;
```

- *Type:* string

---

##### `renewalPeriodInput`<sup>Optional</sup> <a name="renewalPeriodInput" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.property.renewalPeriodInput"></a>

```typescript
public readonly renewalPeriodInput: string;
```

- *Type:* string

---

##### `requestsInput`<sup>Optional</sup> <a name="requestsInput" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.property.requestsInput"></a>

```typescript
public readonly requestsInput: number;
```

- *Type:* number

---

##### `requestTagKeyInput`<sup>Optional</sup> <a name="requestTagKeyInput" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.property.requestTagKeyInput"></a>

```typescript
public readonly requestTagKeyInput: string;
```

- *Type:* string

---

##### `requestTagValueInput`<sup>Optional</sup> <a name="requestTagValueInput" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.property.requestTagValueInput"></a>

```typescript
public readonly requestTagValueInput: string;
```

- *Type:* string

---

##### `tokensInput`<sup>Optional</sup> <a name="tokensInput" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.property.tokensInput"></a>

```typescript
public readonly tokensInput: number;
```

- *Type:* number

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.property.principal"></a>

```typescript
public readonly principal: string;
```

- *Type:* string

---

##### `renewalPeriod`<sup>Required</sup> <a name="renewalPeriod" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.property.renewalPeriod"></a>

```typescript
public readonly renewalPeriod: string;
```

- *Type:* string

---

##### `requests`<sup>Required</sup> <a name="requests" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.property.requests"></a>

```typescript
public readonly requests: number;
```

- *Type:* number

---

##### `requestTagKey`<sup>Required</sup> <a name="requestTagKey" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.property.requestTagKey"></a>

```typescript
public readonly requestTagKey: string;
```

- *Type:* string

---

##### `requestTagValue`<sup>Required</sup> <a name="requestTagValue" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.property.requestTagValue"></a>

```typescript
public readonly requestTagValue: string;
```

- *Type:* string

---

##### `tokens`<sup>Required</sup> <a name="tokens" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.property.tokens"></a>

```typescript
public readonly tokens: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AiGatewayModelServiceConfigRateLimits;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimits">AiGatewayModelServiceConfigRateLimits</a>

---


### AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference <a name="AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.Initializer"></a>

```typescript
import { aiGatewayModelService } from '@cdktn/provider-databricks'

new aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.putTarget">putTarget</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTarget` <a name="putTarget" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.putTarget"></a>

```typescript
public putTarget(value: AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTarget): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.putTarget.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTarget">AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTarget</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.property.target">target</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference">AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.property.modelProviderServiceInput">modelProviderServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.property.targetInput">targetInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTarget">AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.property.modelProviderService">modelProviderService</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfig">AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.property.target"></a>

```typescript
public readonly target: AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference">AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference</a>

---

##### `modelProviderServiceInput`<sup>Optional</sup> <a name="modelProviderServiceInput" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.property.modelProviderServiceInput"></a>

```typescript
public readonly modelProviderServiceInput: string;
```

- *Type:* string

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.property.targetInput"></a>

```typescript
public readonly targetInput: IResolvable | AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTarget;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTarget">AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTarget</a>

---

##### `modelProviderService`<sup>Required</sup> <a name="modelProviderService" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.property.modelProviderService"></a>

```typescript
public readonly modelProviderService: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfig">AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfig</a>

---


### AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference <a name="AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.Initializer"></a>

```typescript
import { aiGatewayModelService } from '@cdktn/provider-databricks'

new aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.resetNativeApiTypes">resetNativeApiTypes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNativeApiTypes` <a name="resetNativeApiTypes" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.resetNativeApiTypes"></a>

```typescript
public resetNativeApiTypes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.property.modelInput">modelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.property.nativeApiTypesInput">nativeApiTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.property.model">model</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.property.nativeApiTypes">nativeApiTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTarget">AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `modelInput`<sup>Optional</sup> <a name="modelInput" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.property.modelInput"></a>

```typescript
public readonly modelInput: string;
```

- *Type:* string

---

##### `nativeApiTypesInput`<sup>Optional</sup> <a name="nativeApiTypesInput" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.property.nativeApiTypesInput"></a>

```typescript
public readonly nativeApiTypesInput: string[];
```

- *Type:* string[]

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.property.model"></a>

```typescript
public readonly model: string;
```

- *Type:* string

---

##### `nativeApiTypes`<sup>Required</sup> <a name="nativeApiTypes" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.property.nativeApiTypes"></a>

```typescript
public readonly nativeApiTypes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTarget;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTarget">AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTarget</a>

---


### AiGatewayModelServiceConfigRoutingDestinationsList <a name="AiGatewayModelServiceConfigRoutingDestinationsList" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsList.Initializer"></a>

```typescript
import { aiGatewayModelService } from '@cdktn/provider-databricks'

new aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsList.get"></a>

```typescript
public get(index: number): AiGatewayModelServiceConfigRoutingDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinations">AiGatewayModelServiceConfigRoutingDestinations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AiGatewayModelServiceConfigRoutingDestinations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinations">AiGatewayModelServiceConfigRoutingDestinations</a>[]

---


### AiGatewayModelServiceConfigRoutingDestinationsOutputReference <a name="AiGatewayModelServiceConfigRoutingDestinationsOutputReference" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.Initializer"></a>

```typescript
import { aiGatewayModelService } from '@cdktn/provider-databricks'

new aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.putExternalModelConfig">putExternalModelConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.putPayPerTokenConfig">putPayPerTokenConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.putProvisionedThroughputConfig">putProvisionedThroughputConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.resetExternalModelConfig">resetExternalModelConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.resetPayPerTokenConfig">resetPayPerTokenConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.resetProvisionedThroughputConfig">resetProvisionedThroughputConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.resetTrafficPercentage">resetTrafficPercentage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExternalModelConfig` <a name="putExternalModelConfig" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.putExternalModelConfig"></a>

```typescript
public putExternalModelConfig(value: AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.putExternalModelConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfig">AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfig</a>

---

##### `putPayPerTokenConfig` <a name="putPayPerTokenConfig" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.putPayPerTokenConfig"></a>

```typescript
public putPayPerTokenConfig(value: AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.putPayPerTokenConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfig">AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfig</a>

---

##### `putProvisionedThroughputConfig` <a name="putProvisionedThroughputConfig" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.putProvisionedThroughputConfig"></a>

```typescript
public putProvisionedThroughputConfig(value: AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.putProvisionedThroughputConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfig">AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfig</a>

---

##### `resetExternalModelConfig` <a name="resetExternalModelConfig" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.resetExternalModelConfig"></a>

```typescript
public resetExternalModelConfig(): void
```

##### `resetPayPerTokenConfig` <a name="resetPayPerTokenConfig" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.resetPayPerTokenConfig"></a>

```typescript
public resetPayPerTokenConfig(): void
```

##### `resetProvisionedThroughputConfig` <a name="resetProvisionedThroughputConfig" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.resetProvisionedThroughputConfig"></a>

```typescript
public resetProvisionedThroughputConfig(): void
```

##### `resetTrafficPercentage` <a name="resetTrafficPercentage" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.resetTrafficPercentage"></a>

```typescript
public resetTrafficPercentage(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.property.externalModelConfig">externalModelConfig</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference">AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.property.isDeleted">isDeleted</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.property.payPerTokenConfig">payPerTokenConfig</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference">AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.property.provisionedThroughputConfig">provisionedThroughputConfig</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference">AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.property.destinationTypeInput">destinationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.property.externalModelConfigInput">externalModelConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfig">AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.property.payPerTokenConfigInput">payPerTokenConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfig">AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.property.provisionedThroughputConfigInput">provisionedThroughputConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfig">AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.property.trafficPercentageInput">trafficPercentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.property.destinationType">destinationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.property.trafficPercentage">trafficPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinations">AiGatewayModelServiceConfigRoutingDestinations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `externalModelConfig`<sup>Required</sup> <a name="externalModelConfig" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.property.externalModelConfig"></a>

```typescript
public readonly externalModelConfig: AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference">AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference</a>

---

##### `isDeleted`<sup>Required</sup> <a name="isDeleted" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.property.isDeleted"></a>

```typescript
public readonly isDeleted: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `payPerTokenConfig`<sup>Required</sup> <a name="payPerTokenConfig" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.property.payPerTokenConfig"></a>

```typescript
public readonly payPerTokenConfig: AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference">AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference</a>

---

##### `provisionedThroughputConfig`<sup>Required</sup> <a name="provisionedThroughputConfig" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.property.provisionedThroughputConfig"></a>

```typescript
public readonly provisionedThroughputConfig: AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference">AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference</a>

---

##### `destinationTypeInput`<sup>Optional</sup> <a name="destinationTypeInput" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.property.destinationTypeInput"></a>

```typescript
public readonly destinationTypeInput: string;
```

- *Type:* string

---

##### `externalModelConfigInput`<sup>Optional</sup> <a name="externalModelConfigInput" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.property.externalModelConfigInput"></a>

```typescript
public readonly externalModelConfigInput: IResolvable | AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfig">AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfig</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `payPerTokenConfigInput`<sup>Optional</sup> <a name="payPerTokenConfigInput" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.property.payPerTokenConfigInput"></a>

```typescript
public readonly payPerTokenConfigInput: IResolvable | AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfig">AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfig</a>

---

##### `provisionedThroughputConfigInput`<sup>Optional</sup> <a name="provisionedThroughputConfigInput" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.property.provisionedThroughputConfigInput"></a>

```typescript
public readonly provisionedThroughputConfigInput: IResolvable | AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfig">AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfig</a>

---

##### `trafficPercentageInput`<sup>Optional</sup> <a name="trafficPercentageInput" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.property.trafficPercentageInput"></a>

```typescript
public readonly trafficPercentageInput: number;
```

- *Type:* number

---

##### `destinationType`<sup>Required</sup> <a name="destinationType" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.property.destinationType"></a>

```typescript
public readonly destinationType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `trafficPercentage`<sup>Required</sup> <a name="trafficPercentage" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.property.trafficPercentage"></a>

```typescript
public readonly trafficPercentage: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AiGatewayModelServiceConfigRoutingDestinations;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinations">AiGatewayModelServiceConfigRoutingDestinations</a>

---


### AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference <a name="AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.Initializer"></a>

```typescript
import { aiGatewayModelService } from '@cdktn/provider-databricks'

new aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.property.modelInput">modelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.property.model">model</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfig">AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `modelInput`<sup>Optional</sup> <a name="modelInput" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.property.modelInput"></a>

```typescript
public readonly modelInput: string;
```

- *Type:* string

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.property.model"></a>

```typescript
public readonly model: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfig">AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfig</a>

---


### AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference <a name="AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.Initializer"></a>

```typescript
import { aiGatewayModelService } from '@cdktn/provider-databricks'

new aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.property.model">model</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.property.modelServingEndpointInput">modelServingEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.property.modelServingEndpoint">modelServingEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfig">AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.property.model"></a>

```typescript
public readonly model: string;
```

- *Type:* string

---

##### `modelServingEndpointInput`<sup>Optional</sup> <a name="modelServingEndpointInput" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.property.modelServingEndpointInput"></a>

```typescript
public readonly modelServingEndpointInput: string;
```

- *Type:* string

---

##### `modelServingEndpoint`<sup>Required</sup> <a name="modelServingEndpoint" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.property.modelServingEndpoint"></a>

```typescript
public readonly modelServingEndpoint: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfig">AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfig</a>

---


### AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference <a name="AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.Initializer"></a>

```typescript
import { aiGatewayModelService } from '@cdktn/provider-databricks'

new aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.putTarget">putTarget</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTarget` <a name="putTarget" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.putTarget"></a>

```typescript
public putTarget(value: AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTarget): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.putTarget.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTarget">AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTarget</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.property.target">target</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference">AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.property.modelProviderServiceInput">modelProviderServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.property.targetInput">targetInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTarget">AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.property.modelProviderService">modelProviderService</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfig">AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.property.target"></a>

```typescript
public readonly target: AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference">AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference</a>

---

##### `modelProviderServiceInput`<sup>Optional</sup> <a name="modelProviderServiceInput" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.property.modelProviderServiceInput"></a>

```typescript
public readonly modelProviderServiceInput: string;
```

- *Type:* string

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.property.targetInput"></a>

```typescript
public readonly targetInput: IResolvable | AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTarget;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTarget">AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTarget</a>

---

##### `modelProviderService`<sup>Required</sup> <a name="modelProviderService" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.property.modelProviderService"></a>

```typescript
public readonly modelProviderService: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfig">AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfig</a>

---


### AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference <a name="AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.Initializer"></a>

```typescript
import { aiGatewayModelService } from '@cdktn/provider-databricks'

new aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.resetNativeApiTypes">resetNativeApiTypes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNativeApiTypes` <a name="resetNativeApiTypes" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.resetNativeApiTypes"></a>

```typescript
public resetNativeApiTypes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.property.modelInput">modelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.property.nativeApiTypesInput">nativeApiTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.property.model">model</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.property.nativeApiTypes">nativeApiTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTarget">AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `modelInput`<sup>Optional</sup> <a name="modelInput" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.property.modelInput"></a>

```typescript
public readonly modelInput: string;
```

- *Type:* string

---

##### `nativeApiTypesInput`<sup>Optional</sup> <a name="nativeApiTypesInput" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.property.nativeApiTypesInput"></a>

```typescript
public readonly nativeApiTypesInput: string[];
```

- *Type:* string[]

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.property.model"></a>

```typescript
public readonly model: string;
```

- *Type:* string

---

##### `nativeApiTypes`<sup>Required</sup> <a name="nativeApiTypes" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.property.nativeApiTypes"></a>

```typescript
public readonly nativeApiTypes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTarget;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTarget">AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTarget</a>

---


### AiGatewayModelServiceConfigRoutingFallbackDestinationsList <a name="AiGatewayModelServiceConfigRoutingFallbackDestinationsList" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsList.Initializer"></a>

```typescript
import { aiGatewayModelService } from '@cdktn/provider-databricks'

new aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsList.get"></a>

```typescript
public get(index: number): AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinations">AiGatewayModelServiceConfigRoutingFallbackDestinations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AiGatewayModelServiceConfigRoutingFallbackDestinations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinations">AiGatewayModelServiceConfigRoutingFallbackDestinations</a>[]

---


### AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference <a name="AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.Initializer"></a>

```typescript
import { aiGatewayModelService } from '@cdktn/provider-databricks'

new aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.putExternalModelConfig">putExternalModelConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.putPayPerTokenConfig">putPayPerTokenConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.putProvisionedThroughputConfig">putProvisionedThroughputConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.resetExternalModelConfig">resetExternalModelConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.resetPayPerTokenConfig">resetPayPerTokenConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.resetProvisionedThroughputConfig">resetProvisionedThroughputConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.resetTrafficPercentage">resetTrafficPercentage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExternalModelConfig` <a name="putExternalModelConfig" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.putExternalModelConfig"></a>

```typescript
public putExternalModelConfig(value: AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.putExternalModelConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfig">AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfig</a>

---

##### `putPayPerTokenConfig` <a name="putPayPerTokenConfig" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.putPayPerTokenConfig"></a>

```typescript
public putPayPerTokenConfig(value: AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.putPayPerTokenConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfig">AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfig</a>

---

##### `putProvisionedThroughputConfig` <a name="putProvisionedThroughputConfig" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.putProvisionedThroughputConfig"></a>

```typescript
public putProvisionedThroughputConfig(value: AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.putProvisionedThroughputConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfig">AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfig</a>

---

##### `resetExternalModelConfig` <a name="resetExternalModelConfig" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.resetExternalModelConfig"></a>

```typescript
public resetExternalModelConfig(): void
```

##### `resetPayPerTokenConfig` <a name="resetPayPerTokenConfig" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.resetPayPerTokenConfig"></a>

```typescript
public resetPayPerTokenConfig(): void
```

##### `resetProvisionedThroughputConfig` <a name="resetProvisionedThroughputConfig" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.resetProvisionedThroughputConfig"></a>

```typescript
public resetProvisionedThroughputConfig(): void
```

##### `resetTrafficPercentage` <a name="resetTrafficPercentage" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.resetTrafficPercentage"></a>

```typescript
public resetTrafficPercentage(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.property.externalModelConfig">externalModelConfig</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference">AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.property.isDeleted">isDeleted</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.property.payPerTokenConfig">payPerTokenConfig</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference">AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.property.provisionedThroughputConfig">provisionedThroughputConfig</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference">AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.property.destinationTypeInput">destinationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.property.externalModelConfigInput">externalModelConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfig">AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.property.payPerTokenConfigInput">payPerTokenConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfig">AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.property.provisionedThroughputConfigInput">provisionedThroughputConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfig">AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.property.trafficPercentageInput">trafficPercentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.property.destinationType">destinationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.property.trafficPercentage">trafficPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinations">AiGatewayModelServiceConfigRoutingFallbackDestinations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `externalModelConfig`<sup>Required</sup> <a name="externalModelConfig" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.property.externalModelConfig"></a>

```typescript
public readonly externalModelConfig: AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference">AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference</a>

---

##### `isDeleted`<sup>Required</sup> <a name="isDeleted" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.property.isDeleted"></a>

```typescript
public readonly isDeleted: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `payPerTokenConfig`<sup>Required</sup> <a name="payPerTokenConfig" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.property.payPerTokenConfig"></a>

```typescript
public readonly payPerTokenConfig: AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference">AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference</a>

---

##### `provisionedThroughputConfig`<sup>Required</sup> <a name="provisionedThroughputConfig" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.property.provisionedThroughputConfig"></a>

```typescript
public readonly provisionedThroughputConfig: AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference">AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference</a>

---

##### `destinationTypeInput`<sup>Optional</sup> <a name="destinationTypeInput" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.property.destinationTypeInput"></a>

```typescript
public readonly destinationTypeInput: string;
```

- *Type:* string

---

##### `externalModelConfigInput`<sup>Optional</sup> <a name="externalModelConfigInput" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.property.externalModelConfigInput"></a>

```typescript
public readonly externalModelConfigInput: IResolvable | AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfig">AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfig</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `payPerTokenConfigInput`<sup>Optional</sup> <a name="payPerTokenConfigInput" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.property.payPerTokenConfigInput"></a>

```typescript
public readonly payPerTokenConfigInput: IResolvable | AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfig">AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfig</a>

---

##### `provisionedThroughputConfigInput`<sup>Optional</sup> <a name="provisionedThroughputConfigInput" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.property.provisionedThroughputConfigInput"></a>

```typescript
public readonly provisionedThroughputConfigInput: IResolvable | AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfig">AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfig</a>

---

##### `trafficPercentageInput`<sup>Optional</sup> <a name="trafficPercentageInput" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.property.trafficPercentageInput"></a>

```typescript
public readonly trafficPercentageInput: number;
```

- *Type:* number

---

##### `destinationType`<sup>Required</sup> <a name="destinationType" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.property.destinationType"></a>

```typescript
public readonly destinationType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `trafficPercentage`<sup>Required</sup> <a name="trafficPercentage" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.property.trafficPercentage"></a>

```typescript
public readonly trafficPercentage: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AiGatewayModelServiceConfigRoutingFallbackDestinations;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinations">AiGatewayModelServiceConfigRoutingFallbackDestinations</a>

---


### AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference <a name="AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.Initializer"></a>

```typescript
import { aiGatewayModelService } from '@cdktn/provider-databricks'

new aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.property.modelInput">modelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.property.model">model</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfig">AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `modelInput`<sup>Optional</sup> <a name="modelInput" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.property.modelInput"></a>

```typescript
public readonly modelInput: string;
```

- *Type:* string

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.property.model"></a>

```typescript
public readonly model: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfig">AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfig</a>

---


### AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference <a name="AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.Initializer"></a>

```typescript
import { aiGatewayModelService } from '@cdktn/provider-databricks'

new aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.property.model">model</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.property.modelServingEndpointInput">modelServingEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.property.modelServingEndpoint">modelServingEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfig">AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.property.model"></a>

```typescript
public readonly model: string;
```

- *Type:* string

---

##### `modelServingEndpointInput`<sup>Optional</sup> <a name="modelServingEndpointInput" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.property.modelServingEndpointInput"></a>

```typescript
public readonly modelServingEndpointInput: string;
```

- *Type:* string

---

##### `modelServingEndpoint`<sup>Required</sup> <a name="modelServingEndpoint" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.property.modelServingEndpoint"></a>

```typescript
public readonly modelServingEndpoint: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfig">AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfig</a>

---


### AiGatewayModelServiceConfigRoutingFallbackOutputReference <a name="AiGatewayModelServiceConfigRoutingFallbackOutputReference" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.Initializer"></a>

```typescript
import { aiGatewayModelService } from '@cdktn/provider-databricks'

new aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.putDestinations">putDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.resetDestinations">resetDestinations</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDestinations` <a name="putDestinations" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.putDestinations"></a>

```typescript
public putDestinations(value: IResolvable | AiGatewayModelServiceConfigRoutingFallbackDestinations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.putDestinations.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinations">AiGatewayModelServiceConfigRoutingFallbackDestinations</a>[]

---

##### `resetDestinations` <a name="resetDestinations" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.resetDestinations"></a>

```typescript
public resetDestinations(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.property.destinations">destinations</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsList">AiGatewayModelServiceConfigRoutingFallbackDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.property.destinationsInput">destinationsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinations">AiGatewayModelServiceConfigRoutingFallbackDestinations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallback">AiGatewayModelServiceConfigRoutingFallback</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.property.destinations"></a>

```typescript
public readonly destinations: AiGatewayModelServiceConfigRoutingFallbackDestinationsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsList">AiGatewayModelServiceConfigRoutingFallbackDestinationsList</a>

---

##### `destinationsInput`<sup>Optional</sup> <a name="destinationsInput" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.property.destinationsInput"></a>

```typescript
public readonly destinationsInput: IResolvable | AiGatewayModelServiceConfigRoutingFallbackDestinations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinations">AiGatewayModelServiceConfigRoutingFallbackDestinations</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AiGatewayModelServiceConfigRoutingFallback;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallback">AiGatewayModelServiceConfigRoutingFallback</a>

---


### AiGatewayModelServiceConfigRoutingOutputReference <a name="AiGatewayModelServiceConfigRoutingOutputReference" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.Initializer"></a>

```typescript
import { aiGatewayModelService } from '@cdktn/provider-databricks'

new aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.putDestinations">putDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.putFallback">putFallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.putTrafficSplitting">putTrafficSplitting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.resetDestinations">resetDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.resetFallback">resetFallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.resetFirstTokenTimeout">resetFirstTokenTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.resetTrafficSplitting">resetTrafficSplitting</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDestinations` <a name="putDestinations" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.putDestinations"></a>

```typescript
public putDestinations(value: IResolvable | AiGatewayModelServiceConfigRoutingDestinations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.putDestinations.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinations">AiGatewayModelServiceConfigRoutingDestinations</a>[]

---

##### `putFallback` <a name="putFallback" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.putFallback"></a>

```typescript
public putFallback(value: AiGatewayModelServiceConfigRoutingFallback): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.putFallback.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallback">AiGatewayModelServiceConfigRoutingFallback</a>

---

##### `putTrafficSplitting` <a name="putTrafficSplitting" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.putTrafficSplitting"></a>

```typescript
public putTrafficSplitting(value: AiGatewayModelServiceConfigRoutingTrafficSplitting): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.putTrafficSplitting.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplitting">AiGatewayModelServiceConfigRoutingTrafficSplitting</a>

---

##### `resetDestinations` <a name="resetDestinations" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.resetDestinations"></a>

```typescript
public resetDestinations(): void
```

##### `resetFallback` <a name="resetFallback" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.resetFallback"></a>

```typescript
public resetFallback(): void
```

##### `resetFirstTokenTimeout` <a name="resetFirstTokenTimeout" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.resetFirstTokenTimeout"></a>

```typescript
public resetFirstTokenTimeout(): void
```

##### `resetTrafficSplitting` <a name="resetTrafficSplitting" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.resetTrafficSplitting"></a>

```typescript
public resetTrafficSplitting(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.property.destinations">destinations</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsList">AiGatewayModelServiceConfigRoutingDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.property.fallback">fallback</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference">AiGatewayModelServiceConfigRoutingFallbackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.property.trafficSplitting">trafficSplitting</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference">AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.property.destinationsInput">destinationsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinations">AiGatewayModelServiceConfigRoutingDestinations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.property.fallbackInput">fallbackInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallback">AiGatewayModelServiceConfigRoutingFallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.property.firstTokenTimeoutInput">firstTokenTimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.property.trafficSplittingInput">trafficSplittingInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplitting">AiGatewayModelServiceConfigRoutingTrafficSplitting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.property.firstTokenTimeout">firstTokenTimeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRouting">AiGatewayModelServiceConfigRouting</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.property.destinations"></a>

```typescript
public readonly destinations: AiGatewayModelServiceConfigRoutingDestinationsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsList">AiGatewayModelServiceConfigRoutingDestinationsList</a>

---

##### `fallback`<sup>Required</sup> <a name="fallback" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.property.fallback"></a>

```typescript
public readonly fallback: AiGatewayModelServiceConfigRoutingFallbackOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference">AiGatewayModelServiceConfigRoutingFallbackOutputReference</a>

---

##### `trafficSplitting`<sup>Required</sup> <a name="trafficSplitting" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.property.trafficSplitting"></a>

```typescript
public readonly trafficSplitting: AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference">AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference</a>

---

##### `destinationsInput`<sup>Optional</sup> <a name="destinationsInput" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.property.destinationsInput"></a>

```typescript
public readonly destinationsInput: IResolvable | AiGatewayModelServiceConfigRoutingDestinations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinations">AiGatewayModelServiceConfigRoutingDestinations</a>[]

---

##### `fallbackInput`<sup>Optional</sup> <a name="fallbackInput" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.property.fallbackInput"></a>

```typescript
public readonly fallbackInput: IResolvable | AiGatewayModelServiceConfigRoutingFallback;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallback">AiGatewayModelServiceConfigRoutingFallback</a>

---

##### `firstTokenTimeoutInput`<sup>Optional</sup> <a name="firstTokenTimeoutInput" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.property.firstTokenTimeoutInput"></a>

```typescript
public readonly firstTokenTimeoutInput: string;
```

- *Type:* string

---

##### `trafficSplittingInput`<sup>Optional</sup> <a name="trafficSplittingInput" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.property.trafficSplittingInput"></a>

```typescript
public readonly trafficSplittingInput: IResolvable | AiGatewayModelServiceConfigRoutingTrafficSplitting;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplitting">AiGatewayModelServiceConfigRoutingTrafficSplitting</a>

---

##### `firstTokenTimeout`<sup>Required</sup> <a name="firstTokenTimeout" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.property.firstTokenTimeout"></a>

```typescript
public readonly firstTokenTimeout: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AiGatewayModelServiceConfigRouting;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRouting">AiGatewayModelServiceConfigRouting</a>

---


### AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference <a name="AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.Initializer"></a>

```typescript
import { aiGatewayModelService } from '@cdktn/provider-databricks'

new aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplitting">AiGatewayModelServiceConfigRoutingTrafficSplitting</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AiGatewayModelServiceConfigRoutingTrafficSplitting;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplitting">AiGatewayModelServiceConfigRoutingTrafficSplitting</a>

---


### AiGatewayModelServiceProviderConfigOutputReference <a name="AiGatewayModelServiceProviderConfigOutputReference" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference.Initializer"></a>

```typescript
import { aiGatewayModelService } from '@cdktn/provider-databricks'

new aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfig">AiGatewayModelServiceProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AiGatewayModelServiceProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfig">AiGatewayModelServiceProviderConfig</a>

---



